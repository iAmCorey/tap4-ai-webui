/* eslint-disable react/jsx-no-target-blank */

import Link from 'next/link';
import { WebNavigation } from '@/db/supabase/types';
import { CircleArrowRight, SquareArrowOutUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function WebNavCard({
  name,
  screenshot_thumbnail_data,
  title,
  url,
  description,
  tags_list,
  is_feature,
}: WebNavigation) {
  const t = useTranslations('Home');

  return (
    <div
      className={`relative mx-2 flex h-[361px] ${is_feature ? 'border border-orange-400' : ''} flex-col gap-3  rounded-2xl bg-white p-6 shadow-sm lg:mx-auto lg:h-[343px]`}
    >
      {is_feature === 1 && (
        <span className='z-1 absolute left-0 top-0 rounded-br-xl rounded-tl-xl bg-[#ffa11b] px-2 py-1 text-xs font-semibold  text-white'>
          Featured
        </span>
      )}
      <Link href={`/ai/${name}`} title={title} className='group relative'>
        <img
          src={screenshot_thumbnail_data || ''}
          alt={title}
          title={title}
          width={310}
          height={174}
          className='aspect-[310/174] w-full rounded-xl bg-white/40 hover:opacity-70'
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
      <p className='mb-1 line-clamp-3 h-1/2 px-[6px] text-sm  text-gray-500 lg:mb-1 lg:text-sm'>{description}</p>
      <div className='flex h-fit w-fit items-center justify-center gap-[2px] whitespace-nowrap  text-xs '>
        {tags_list.slice(0, 2).map((item) => (
          <p
            className='bottom-1 mx-1 rounded-md border border-orange-200 bg-orange-50  px-2 text-sm shadow-sm hover:border-orange-300 hover:bg-orange-400 hover:text-white'
            key={item}
          >
            {item}
          </p>
          // <Link className='bottom-1 text-sm rounded-xl border border-orange-200 shadow-sm  px-2 mx-1 bg-orange-50 hover:border-orange-300 hover:bg-orange-400 hover:text-white' key={item} href={`/category/${item}`}>{item}</Link>
        ))}
      </div>
    </div>
  );
}
