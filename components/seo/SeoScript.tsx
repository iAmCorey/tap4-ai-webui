'use client';

import { useEffect } from 'react';
import Script from 'next/script';

import { GOOGLE_TRACKING_ID, PLAUSIBLE_DOMAIN } from '@/lib/env';

export default function SeoScript() {
  const umamiWebsiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  const plausibleScriptUrl = process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL;
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  useEffect(() => {}, [umamiWebsiteId, plausibleScriptUrl, plausibleDomain]);

  return (
    <>
      <Script strategy='afterInteractive' src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TRACKING_ID}`} />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_TRACKING_ID}', {
            page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Script
        src='https://cloud.umami.is/script.js'
        strategy='afterInteractive'
        data-website-id={umamiWebsiteId}
        onLoad={() => {
          const script = document.querySelector('link[href="https://cloud.umami.is/script.js"]');
          // console.log(script);
          if (script && umamiWebsiteId) {
            script.setAttribute('data-website-id', umamiWebsiteId);
          }
        }}
      />
      <Script
        src={plausibleScriptUrl}
        strategy='afterInteractive'
        data-domain={PLAUSIBLE_DOMAIN}
        onLoad={() => {
          const script = document.querySelector(`link[href="${plausibleScriptUrl}"]`);
          // console.log(script);
          if (script && plausibleDomain) {
            script.setAttribute('data-domain', plausibleDomain);
          }
        }}
      />
      <Script
        src='https://plausible.zeabur.app/js/script.js'
        strategy='afterInteractive'
        data-domain={PLAUSIBLE_DOMAIN}
        onLoad={() => {
          const script = document.querySelector(`link[href="${plausibleScriptUrl}"]`);
          // console.log(script);
          if (script && plausibleDomain) {
            script.setAttribute('data-domain', plausibleDomain);
          }
        }}
      />
    </>
  );
}
