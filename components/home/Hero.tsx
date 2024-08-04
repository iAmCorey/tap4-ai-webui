'use client';

// import { useEffect, useState } from 'react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import { CircleChevronRight } from 'lucide-react';
import type { WebNavigation } from '@/db/supabase/types';
// import { Em } from '@radix-ui/themes';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import { ArrowRightIcon, PlusIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';
import Slider from 'react-slick';

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';

// import { Separator } from '@/components/ui/separator';
import TestimonialsAvatars from './TestimonialsAvatars';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Hero({ dataList }: { dataList: WebNavigation[] }) {
  const t = useTranslations('Home');
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    pauseOnHover: true,
  };
  return (
    <nav className='mx-4 pb-20 pt-8'>
      <div className='container grid grid-cols-1 gap-6 lg:grid-cols-2 lg:px-2'>
        <div className='text-center lg:mx-10 lg:text-start'>
          <div className='flex w-full items-center justify-center '>
            <div className='mb-3 w-fit rounded-xl border border-gray-300 px-3 py-1 text-center text-sm lg:mx-auto lg:mt-5'>
              <p>
                🔥&nbsp;&nbsp;<span className='font-semibold'>32</span> {t('newly-add')}
              </p>
            </div>
          </div>
          <h1 className='text-4xl font-bold lg:text-6xl'>{t('title')}</h1>
          <h2 className='mt-4 text-lg opacity-75'>{t('subTitle')}</h2>
          <div className='mt-6 flex flex-col items-center justify-start gap-3 md:flex-row'>
            <Button size='lg' className='bg-orange-400 text-white hover:bg-orange-400 hover:opacity-80' asChild>
              <Link href='/explore'>
                Explore
                <ArrowRightIcon className='ml-2 size-4' />
              </Link>
            </Button>
            <Button
              size='lg'
              className='border border-gray-200 bg-white hover:border hover:border-gray-200 hover:bg-gray-200 hover:text-black'
              asChild
            >
              <Link href='/submit'>
                Submit
                <PlusIcon className='ml-2 size-4' />
              </Link>
            </Button>
          </div>

          <div className='mt-10 flex flex-col items-start justify-center text-center lg:text-start'>
            {/* eslint-disable-next-line react/jsx-boolean-value */}
            <TestimonialsAvatars priority={true} />
            {/* <h5 className='text-xs font-semibold uppercase tracking-wider '>
              <Em>12,129 products featured.</Em>
            </h5> */}
          </div>
        </div>
        <div className='mt-16 text-center lg:mx-10 lg:text-start'>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Slider {...settings} className='rounded-xl shadow-md'>
            {dataList.map((item) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <Link href={`/ai/${item.name}`} title={item.title}>
                <div className='relative flex flex-col items-center justify-center'>
                  <span className='absolute left-0 top-0 z-10 rounded-br-lg rounded-tl-lg bg-[#ffa11b] px-2 py-1 text-xs font-semibold  text-white'>
                    Featured
                  </span>
                  <span className='absolute bottom-0 left-0 z-10 w-full rounded-xl border-t-gray-600 bg-white bg-opacity-95 px-4 pt-2 text-sm font-semibold text-gray-600'>
                    {item.title}
                  </span>
                  <AspectRatio.Root ratio={16 / 9}>
                    <Image
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                      src={item.screenshot_thumbnail_data}
                      className='Image block rounded-xl'
                      width={160 * 5}
                      height={90 * 5}
                      alt='Featured websited'
                    />
                  </AspectRatio.Root>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
      {/* <Separator className='mx-auto my-10 h-px w-4/5 lg:my-16' /> */}
    </nav>
  );
}
