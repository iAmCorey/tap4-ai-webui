import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { createClient } from '@/db/supabase/client';
import { CircleArrowRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

import { Separator } from '@/components/ui/separator';
import BaseImage from '@/components/image/BaseImage';
import Icon from '@/components/image/Icon';
import MarkdownProse from '@/components/MarkdownProse';

export async function generateMetadata({
  params: { locale, websiteName },
}: {
  params: { locale: string; websiteName: string };
}): Promise<Metadata> {
  const supabase = createClient();
  const t = await getTranslations({
    locale,
    namespace: 'Metadata.ai',
  });
  const { data } = await supabase
    // .from('web_navigation')
    .from('mb_site')
    .select()
    .eq('status', 1)
    .eq('name', websiteName);

  if (!data || !data[0]) {
    notFound();
  }

  return {
    title: `${data[0].title} | ${t('titleSubfix')}`,
    description: data[0].description,
  };
}
export default async function Page({ params: { websiteName } }: { params: { websiteName: string } }) {
  const supabase = createClient();
  const t = await getTranslations('Startup.detail');
  const { data: dataList } = await supabase
    // .from('web_navigation')
    .from('mb_site')
    .select()
    .eq('status', 1)
    .eq('name', websiteName);
  if (!dataList) {
    notFound();
  }
  const data = dataList[0];

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() returns month from 0 to 11
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  };

  const formattedDate = formatDate(data.create_time);
  return (
    <div className='w-full'>
      <div className='flex flex-col px-6 py-5 lg:h-[433px] lg:flex-row lg:justify-between lg:px-0 lg:py-10'>
        <div className='flex flex-col items-center lg:items-start'>
          <div className='flex flex-row items-center pb-6'>
            <div className='font-semibold '>{t('home')}</div>
            <div className=''>
              <Icon src='/icons/arrow.svg' className='h-[28px] w-[28px]' />
            </div>
            <div className='text-gray-500'>{data.title}</div>
          </div>
          <div className='space-y-1 text-balance lg:space-y-3'>
            <h1 className='text-2xl font-bold text-gray-700 lg:text-4xl'>{data.title}</h1>
            <div className='flex h-fit w-fit items-center justify-center gap-[2px] whitespace-nowrap pb-5 pt-2'>
              {data.tags_list.map((item) => (
                <p
                  className='bottom-1 mr-2 w-fit rounded-lg border border-orange-200 bg-orange-50  px-2 py-1 text-sm shadow-sm hover:border-orange-300 hover:bg-orange-400 hover:text-white'
                  key={item}
                >
                  {item}
                </p>
              ))}
            </div>
            <h2 className='text-xs text-slate-600 lg:text-sm'>{data.description}</h2>
          </div>
          <div className='flex flex-row pt-5'>
            <div className='text-sm font-semibold'>{t('added-on')}:</div>
            <div className='px-2 text-sm'>{formattedDate}</div>
          </div>
          <a
            href={data.url}
            target='_blank'
            rel='noreferrer'
            className='flex-center mt-5 min-h-5 w-full gap-1 rounded-[8px] bg-orange-400 p-[10px] text-sm font-semibold capitalize text-white hover:opacity-80 lg:mt-auto lg:w-[288px]'
          >
            {t('visitWebsite')} <CircleArrowRight className='size-[14px]' />
          </a>
        </div>
        <a
          href={data.url}
          target='_blank'
          rel='noreferrer'
          className='flex-center group relative mt-5 h-[171px] w-full flex-shrink-0 lg:h-[254px] lg:w-[466px]'
        >
          <BaseImage
            title={data.title}
            alt={data.title}
            // width={466}
            // height={243}
            fill
            src={data.screenshot_thumbnail_data || ''}
            className='absolute mt-3 aspect-[466/234] w-full rounded-[16px] border border-[#424242] bg-[#424242] bg-cover lg:mt-0'
          />
          <div className='absolute inset-0 z-10 hidden items-center justify-center gap-1 rounded-[16px] bg-black bg-opacity-50 text-2xl text-white transition-all duration-200 group-hover:flex'>
            {t('visitWebsite')} <CircleArrowRight className='size-5' />
          </div>
        </a>
      </div>
      <Separator className='bg-[#010101]' />
      <div className='mb-5 px-3 lg:px-0'>
        <h2 className='my-5 text-2xl font-bold text-gray-700 lg:my-10'>{t('introduction')}</h2>
        <MarkdownProse markdown={data?.detail || ''} className='text-gray-700 ' />
      </div>
    </div>
  );
}
