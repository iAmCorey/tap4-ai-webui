/* eslint-disable react/jsx-no-target-blank */

import Link from 'next/link';
import { WebNavigation } from '@/db/supabase/types';
import { CircleArrowRight, SquareArrowOutUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function WebNavCard({ name, thumbnail_url, title, url, content, tag_name }: WebNavigation) {
  const t = useTranslations('Home');

  return (
    <div className='flex h-[210px] flex-col gap-3 rounded-2xl bg-white p-6 shadow-sm lg:h-[343px]'>
      <Link href={`/ai/${name}`} title={title} className='group relative'>
        <img
          src={thumbnail_url || ''}
          alt={title}
          title={title}
          width={310}
          height={174}
          className='aspect-[310/174] w-full rounded-lg bg-white/40 hover:opacity-70'
        />
        <div className='absolute inset-0 z-10 hidden items-center justify-center gap-1 rounded-xl bg-black bg-opacity-50 text-xl text-white transition-all duration-200 group-hover:flex'>
          {t('checkDetail')} <CircleArrowRight className='size-4' />
        </div>
      </Link>
      <div className='flex items-center justify-between px-[6px]'>
        <a href={url} title={title} target='_blank' rel='nofollow' className='hover:opacity-70'>
          <h3 className='line-clamp-1 flex-1 font-bold lg:text-xl'>{title}</h3>
        </a>
        <a href={url} title={title} target='_blank' rel='nofollow' className='hover:opacity-70'>
          <SquareArrowOutUpRight className='size-5' />
          <span className='sr-only'>{title}</span>
        </a>
      </div>
      <p className='mb-1 line-clamp-3 h-1/2 px-[6px] text-xs  text-gray-500 lg:mb-1 lg:text-sm'>{content}</p>
      <div className='ml-1 flex h-[30px] w-[70px] items-center justify-center gap-[2px] whitespace-nowrap rounded-xl border border-orange-200 bg-orange-50 px-3 text-xs shadow-sm hover:border-orange-300 hover:bg-orange-400 hover:text-white'>
        <p className='bottom-1 text-sm'>{tag_name}</p>
      </div>
    </div>
  );
}
