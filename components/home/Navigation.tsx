'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

// import BaseImage from '../image/BaseImage';
import LocaleSwitcher from '../LocaleSwitcher';
import CoffeeButton from './CoffeeButton';
import MenuBtn from './MenuBtn';
import NavigationDrawer from './NavigationDrawer';

export default function Navigation() {
  const t = useTranslations('Navigation');
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const NavLinks = NAV_LINKS.map((item) => ({
    ...item,
    label: t(`${item.code}`),
  }));

  return (
    <>
      <header className='bg-frosted-glass sticky left-0 top-0 z-50 flex h-[64px] bg-white px-5 blur-[60%] filter lg:px-0'>
        <nav className='mx-auto flex max-w-pc flex-1 items-center'>
          <div className='flex w-full items-center justify-around lg:w-auto'>
            <a href='/' className='text-lg'>
              <span className='font-bold text-orange-400'>MagicBox</span>
              <span className='font-bold'>.Tools</span>
            </a>
            <div className='block lg:hidden'>{/* <MenuIcon className="w-4 h-4 text-gray-800" /> */}</div>
          </div>
          <div>
            {/* <Link className='hover:opacity-80' href='/' title={t('title')}>
              <BaseImage
                src='/images/magicbox.svg'
                alt={t('title')}
                title={t('title')}
                width={64}
                height={64}
                className='size-[58px] lg:size-16'
              />
            </Link> */}
          </div>
          {/* pc */}
          <div className='ml-auto flex h-full items-center gap-x-[46px]'>
            <ul className='hidden h-full flex-1 font-normal capitalize lg:flex lg:gap-x-12'>
              {NavLinks.map((item) => (
                <Link key={item.code} href={item.href} title={item.code}>
                  <li
                    className={cn(
                      'flex h-full items-center text-black hover:text-orange-500',
                      pathname === item.href && 'text-orange-500',
                      pathname.includes(item.href) && item.href !== '/' && 'text-orange-500',
                    )}
                  >
                    {item.label}
                  </li>
                </Link>
              ))}
            </ul>
            <div className='flex items-center gap-x-3'>
              <CoffeeButton />
              <LocaleSwitcher />
            </div>
          </div>
          {/* mobile */}
          <div className='mx-3 flex items-center gap-x-4 lg:hidden'>
            <MenuBtn open={open} onClick={() => setOpen(!open)} />
          </div>
        </nav>
      </header>
      <NavigationDrawer open={open} setOpen={setOpen} />
    </>
  );
}
