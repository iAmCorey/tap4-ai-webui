import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { createClient } from '@/db/supabase/client';
import { CircleChevronRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

import { RevalidateOneHour } from '@/lib/constants';
// import Faq from '@/components/Faq';
import SearchForm from '@/components/home/SearchForm';
import WebNavCardList from '@/components/webNav/WebNavCardList';

import { TagList } from './Tag';

const ScrollToTop = dynamic(() => import('@/components/page/ScrollToTop'), { ssr: false });

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({
    locale,
    namespace: 'Metadata.home',
  });

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL as string),
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: './',
    },
  };
}

export const revalidate = RevalidateOneHour;

export default async function Page() {
  const supabase = createClient();
  const t = await getTranslations('Home');
  const [{ data: categoryList }, { data: navigationList }] = await Promise.all([
    supabase.from('navigation_category').select(),
    // supabase.from('web_navigation').select().order('collection_time', { ascending: false }).limit(20),
    supabase
      .from('mb_site')
      .select()
      .eq('status', 1)
      .order('priority', { ascending: false })
      .order('create_time', { ascending: false })
      .limit(20),
  ]);

  return (
    <div className='relative w-full'>
      <div className='relative mx-auto w-full max-w-pc flex-1 px-3 lg:px-0'>
        <div className='mt-10 flex w-fit flex-col rounded-xl border border-gray-300 px-3 py-1 text-center text-sm lg:mx-auto lg:gap-1'>
          <p>
            🔥&nbsp;&nbsp;<span className='font-semibold'>12</span> {t('newly-add')}
          </p>
        </div>
        <div className='mb-5 flex flex-col text-center lg:mx-auto lg:mb-10 lg:gap-1'>
          <h1 className='pb-4 pt-4 text-5xl font-bold text-black lg:text-5xl'>{t('title')}</h1>
          <h2 className='text-ray-800 text-balance text-lg lg:text-lg'>{t('subTitle')}</h2>
        </div>
        <div className='flex w-full items-center justify-center pb-10 pt-6'>
          <SearchForm />
        </div>
        <div className='mb-10 mt-10'>
          <TagList
            data={categoryList!.map((item) => ({
              id: String(item.id),
              name: item.title,
              href: `/category/${item.name}`,
            }))}
          />
        </div>
        <div className='my-6 text-3xl font-bold text-gray-800'>{t('section-new')}</div>
        <div className='flex flex-col gap-5'>
          {/* <h2 className='text-center text-[18px] lg:text-[32px]'>{t('ai-navigate')}</h2> */}
          <WebNavCardList dataList={navigationList!} />
          <Link
            href='/explore'
            className='mx-auto mb-10 mt-5 flex w-fit items-center justify-center gap-5 rounded-[9px] border border-gray-600 p-[10px] text-sm leading-4 hover:border-white hover:bg-orange-400 hover:text-white hover:opacity-70'
          >
            {t('exploreMore')}
            <CircleChevronRight className='mt-[0.5] h-[20px] w-[20px]' />
          </Link>
        </div>
        {/* <Faq /> */}
        <ScrollToTop />
      </div>
    </div>
  );
}
