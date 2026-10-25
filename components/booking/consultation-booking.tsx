"use client";

import { useEffect, useRef, useState } from "react";

import { site } from "@/content/site";
import type { Dictionary } from "@/content/types";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

declare global {
  type CalFunction = ((...args: unknown[]) => void) & { ns?: Record<string, { q?: unknown[][] }>; q?: unknown[][]; loaded?: boolean };
  interface Window { Cal?: CalFunction }
}

const CAL_SCRIPT_ID = "cal-embed-script";

export function ConsultationBooking({ content }: { content: Dictionary["booking"] }) {
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const isEmbedReady = () => {
      const iframe = document.querySelector<HTMLIFrameElement>("#cal-inline-booking iframe");
      return Boolean(iframe && iframe.offsetHeight > 0);
    };

    const configure = () => {
      if (!window.Cal) return false;
      window.Cal("init", { origin: "https://app.cal.com" });
      window.Cal("inline", { elementOrSelector: "#cal-inline-booking", calLink: site.consultationEventUrl.replace("https://cal.com/", "") });
      return true;
    };

    const waitForEmbed = () => {
      if (isEmbedReady()) {
        setStatus("ready");
        return;
      }
      setStatus("loading");
    };

    if (!window.Cal) {
      const cal = ((...args: unknown[]) => { cal.q ??= []; cal.q.push(args); }) as CalFunction;
      cal.q = [];
      cal.ns = {};
      window.Cal = cal;
    }

    const embedObserver = new MutationObserver(waitForEmbed);
    const embedContainer = document.getElementById("cal-inline-booking");
    if (embedContainer) embedObserver.observe(embedContainer, { childList: true, subtree: true });
    const fallbackTimer = window.setTimeout(() => {
      if (!isEmbedReady()) setStatus("error");
    }, 8000);

    const existingScript = document.getElementById(CAL_SCRIPT_ID) as HTMLScriptElement | null;
    if (existingScript) {
      if (configure()) queueMicrotask(waitForEmbed);
      else existingScript.addEventListener("load", () => { if (configure()) waitForEmbed(); else setStatus("error"); }, { once: true });
      existingScript.addEventListener("error", () => setStatus("error"), { once: true });
      return () => { window.clearTimeout(fallbackTimer); embedObserver.disconnect(); };
    }

    if (!configure()) { queueMicrotask(() => setStatus("error")); return; }

    const script = document.createElement("script");
    script.id = CAL_SCRIPT_ID;
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    script.onload = waitForEmbed;
    script.onerror = () => setStatus("error");
    document.head.appendChild(script);

    return () => { window.clearTimeout(fallbackTimer); embedObserver.disconnect(); script.onload = null; script.onerror = null; };
  }, []);

  return (
    <Section className="bg-brand-primary-dark py-16 text-white sm:py-24">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-light">{content.eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">{content.title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-brand-light">{content.description}</p>
          <div className="mt-10 overflow-hidden rounded-2xl bg-brand-surface text-brand-dark shadow-xl">
            {status === "loading" && <p className="px-6 py-8 text-sm text-brand-muted">{content.loading}</p>}
            {status === "error" && <div className="px-6 py-8 text-sm"><p>{content.error}</p><p className="mt-3">{content.fallback}</p><a className="mt-4 inline-block font-semibold text-brand-primary underline underline-offset-4" href={site.consultationEventUrl} rel="noreferrer" target="_blank">{content.fallbackLabel}</a></div>}
            <div id="cal-inline-booking" className={status === "ready" ? "min-h-[680px] w-full" : "hidden"} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
