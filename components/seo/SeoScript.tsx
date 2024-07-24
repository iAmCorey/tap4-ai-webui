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
        id='postdog-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys getNextSurveyStep onSessionId setPersonProperties".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
            posthog.init('phc_dYr6icXhFs551g1c0AwSsDN9EvOl6KlizZ5Mw3nqRW2',{api_host:'https://us.i.posthog.com', person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
              })
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
    </>
  );
}
