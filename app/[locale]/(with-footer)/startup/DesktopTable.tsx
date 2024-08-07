import { SquareArrowOutUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { STARTUP_LIST } from '@/lib/constants';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import PriceItem from './PriceItem';
import TagItem from './TagItem';

export default function DesktopTable() {
  const t = useTranslations('Startup.table');

  return (
    <div className='mb-10 hidden w-full lg:block'>
      <Table className='border-separate border-spacing-y-3'>
        <TableHeader>
          <TableRow className='tr-rounded h-14 rounded-[4px] border-none bg-slate-50 hover:bg-slate-100 '>
            <TableHead className='w-[100px] text-2xl font-bold text-gray-800 '>{t('da')}</TableHead>
            <TableHead className='w-[200px] text-2xl font-bold text-gray-800'>{t('website')}</TableHead>
            <TableHead className='w-[200px] text-2xl font-bold text-gray-800'>{t('tags')}</TableHead>
            <TableHead className='w-[200px] text-2xl font-bold text-gray-800'>{t('price')}</TableHead>
            <TableHead className='w-16 text-2xl font-bold text-gray-800'>{t('submission')}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className='space-y-3'>
          {STARTUP_LIST.map((item) => (
            <TableRow
              key={item.DA}
              className='tr-rounded h-14 rounded-[4px] border-none bg-slate-50 hover:bg-slate-100'
            >
              <TableCell className='text-sm'>{item.DA}</TableCell>
              <TableCell className='text-[18px]'>{item.Website}</TableCell>
              <TableCell className='flex gap-1'>
                {item.Tag ? item.Tag.split(',').map((tag) => <TagItem key={tag} title={tag} />) : null}
              </TableCell>
              <TableCell>
                <PriceItem title={item.Price} isFree={item.Price.toLowerCase() === 'free'} />
              </TableCell>
              <TableCell>
                <a
                  href={item.URL}
                  target='_blank'
                  rel='noreferrer'
                  className='flex-center h-8 w-full rounded-[4px] hover:opacity-80'
                >
                  <SquareArrowOutUpRight className='text-[#686B84]' />
                  <span className='sr-only'>{item.Website}</span>
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
