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
    or (p_service is not null and p_service not in (
      'personal-assistance',
      'childcare',
      'house-cleaning',
      'transportation-tours',
      'meal-preparation',
      'activity-itineraries',
      'language-support'
    ))
  then
    raise exception 'invalid review';
  end if;

  insert into public.reviews (
    name, rating, comment, service, language, status,
    public_display_consent, consent_version, created_at
  ) values (
    trim(p_name), p_rating, trim(p_comment), p_service,
    p_language, 'pending', true, '2026-10-24', now()
  );
end;
$$;

revoke all on function public.submit_review(text, smallint, text, text, text, boolean) from public;
grant execute on function public.submit_review(text, smallint, text, text, text, boolean) to anon, authenticated;
