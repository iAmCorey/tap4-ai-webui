import { HTMLAttributeAnchorTarget } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { CONTACT_US_EMAIL } from '@/lib/env';

function InfoLink({
  href,
  title,
  target,
  type,
}: {
  href: string;
  title: string;
  target?: HTMLAttributeAnchorTarget;
  type?: string;
}) {
  return (
    <Link
      href={href}
      title={title}
      className='whitespace-nowrap text-xs hover:opacity-70 lg:text-sm'
      target={target}
      type={type}
    >
      {title}
    </Link>
  );
}

export default function Footer() {
  const t = useTranslations('Footer');

  const SupportLinks = [
    // {
    //   title: t('tap4'),
    //   href: 'https://www.tap4.ai',
    // },
    {
      name: 'Tap4 AI Tools Diresctory',
      title: 'Tap4 AI Tools Directory',
      href: 'https://www.tap4.ai',
    },
    {
      name: 'Woy AI Tools',
      title: 'Woy AI Tools Directory',
      href: 'https://woy.ai/',
    },
    {
      name: 'DokeyAI',
      title: 'Dokey AI Tools Directory',
      href: 'https://dokeyai.com/',
    },
    {
      name: 'AI WITH.ME',
      title: 'AI WITH.ME | Discover thousands of AI Tools',
      href: 'https://aiwith.me',
    },
    {
      name: 'AiToolsHubs',
      title: 'AiToolsHubs',
      href: 'https://www.aitoolshubs.com/',
    },
    {
      name: 'AI Tool Center',
      title: 'AI Tool Center',
      href: 'https://aitoolcenter.com/',
    },
    {
      name: 'AiHeron',
      title: '智鹭AI导航',
      href: 'https://www.aiheron.com/',
    },
    {
      name: 'All in AI Tools',
      title: 'Explore the Best AI Tools',
      href: 'https://allinai.tools',
    },
  ];

  const INFO_LIST = [
    {
      title: t('privacy'),
      href: '/privacy-policy',
    },
    {
      title: t('termsConditions'),
      href: '/terms-of-service',
    },
  ];

  return (
    <footer className='w-full bg-white'>
      <div className='mx-auto flex min-h-[251px] max-w-pc flex-col items-center justify-between p-10 pb-5 lg:flex-row lg:px-0 lg:pb-10'>
        <div className='flex flex-col items-center lg:items-stretch'>
          {/* <h1 className='mb-1 text-xl font-bold text-orange-400 lg:h-8 lg:text-[32px]'>{t('title')}</h1> */}
          <h1 className='mb-1 text-xl font-bold text-orange-400 lg:h-8 lg:text-[32px]'>
            MagicBox<span className='text-gray-800'>.Tools</span>
          </h1>
          <h2 className='mb-4 text-sm font-semibold'>{t('subTitle')}</h2>
          <h2 className='text-xs'>{t('description')}</h2>
        </div>
        <div className='mt-5 flex flex-col items-center gap-y-5 lg:mt-0 lg:flex-row lg:items-stretch lg:gap-x-10'>
          <div className='flex w-full flex-col gap-2'>
            <h2 className='font-bold'>{t('support')}</h2>
            {SupportLinks.map((item) => (
              <a
                href={item.href}
                key={item.href}
                target='_blank'
                rel='noreferrer'
                className='text-xs hover:opacity-70 lg:text-sm'
                title={item.title}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className='grid grid-cols-2 gap-x-10 gap-y-5 lg:grid-cols-1 lg:gap-3'>
            <h2 className='font-bold'>{t('legal')}</h2>
            {INFO_LIST.map((item) => (
              <InfoLink key={item.href} href={item.href} title={item.title} />
            ))}
            <a
              href={`mailto:${CONTACT_US_EMAIL}`}
              className='whitespace-nowrap text-xs hover:opacity-70 lg:text-sm'
              title={t('contactUs')}
              type='email'
            >
              {t('contactUs')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
