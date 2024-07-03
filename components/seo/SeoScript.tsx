import Script from 'next/script';

import { GOOGLE_TRACKING_ID, PLAUSIBLE_DOMAIN, PLAUSIBLE_URL, UMAMI_WEBSITE_ID } from '@/lib/env';

export default function SeoScript() {
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
        data-website-id={{ UMAMI_WEBSITE_ID }}
      />
      <Script
        src={`https://${PLAUSIBLE_URL}/js/script.js`}
        strategy='afterInteractive'
        data-domain={{ PLAUSIBLE_DOMAIN }}
      />
    </>
  );
}
