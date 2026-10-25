create table public.reviews (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 2 and 80),
  rating smallint not null check (rating between 1 and 5),
  comment text not null check (char_length(comment) between 10 and 1200),
  service text check (service is null or service in (
    'personal-assistance',
    'childcare',
    'house-cleaning',
    'transportation-tours',
    'meal-preparation',
    'activity-itineraries',
    'language-support'
  )),
  language text not null check (language in ('en', 'es')),
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected', 'unpublished')),
  public_display_consent boolean not null default false check (public_display_consent = true),
  consent_version text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index reviews_public_language_created_at_idx on public.reviews (language, created_at desc) where status = 'approved';
create index reviews_status_created_at_idx on public.reviews (status, created_at desc);
alter table public.reviews enable row level security;

grant select on public.reviews to anon, authenticated;

create or replace function public.set_review_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = pg_catalog, public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger reviews_set_updated_at
before update on public.reviews
for each row execute function public.set_review_updated_at();

create policy "Anyone can read approved reviews"
  on public.reviews for select to anon, authenticated
  using (status = 'approved');

revoke insert, update, delete on public.reviews from anon, authenticated;

create or replace function public.submit_review(
  p_name text,
  p_rating smallint,
  p_comment text,
  p_service text,
  p_language text,
  p_public_display_consent boolean
)
returns void
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
begin
  if p_language not in ('en', 'es')
    or p_rating not between 1 and 5
    or p_public_display_consent is not true
    or char_length(trim(p_name)) not between 2 and 80
    or char_length(trim(p_comment)) not between 10 and 1200
  then
    raise exception 'invalid review';
  end if;

  insert into public.reviews (
    name, rating, comment, service, language, status,
    public_display_consent, consent_version, created_at
  ) values (
    trim(p_name), p_rating, trim(p_comment), nullif(trim(p_service), ''),
    p_language, 'pending', true, '2026-10-24', now()
  );
end;
$$;

revoke all on function public.submit_review(text, smallint, text, text, text, boolean) from public;
grant execute on function public.submit_review(text, smallint, text, text, text, boolean) to anon, authenticated;
revoke all on function public.set_review_updated_at() from public;
