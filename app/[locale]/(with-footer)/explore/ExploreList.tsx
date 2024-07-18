import { createClient } from '@/db/supabase/client';

import SearchForm from '@/components/home/SearchForm';
import BasePagination from '@/components/page/BasePagination';
import WebNavCardList from '@/components/webNav/WebNavCardList';

import { TagList } from '../(home)/Tag';

const WEB_PAGE_SIZE = 12;

export default async function ExploreList({ pageNum }: { pageNum?: string }) {
  const supabase = createClient();
  const currentPage = pageNum ? Number(pageNum) : 1;

  // start and end
  const start = (currentPage - 1) * WEB_PAGE_SIZE;
  const end = start + WEB_PAGE_SIZE - 1;

  const [{ data: categoryList }, { data: navigationList, count }] = await Promise.all([
    supabase.from('navigation_category').select(),
    supabase
      // .from('web_navigation')
      .from('mb_site')
      .select('*', { count: 'exact' })
      .eq('status', 1)
      // .order('collection_time', { ascending: false })
      .order('create_time', { ascending: false })
      .range(start, end),
  ]);

  return (
    <>
      <div className='mb-4 flex w-full items-center justify-center'>
        <SearchForm />
      </div>
      <div className='mx-auto mb-10 mt-5 w-full px-3 lg:px-0 '>
        <TagList
          data={categoryList!.map((item) => ({
            id: String(item.id),
            name: item.title,
            href: `/category/${item.name}`,
          }))}
        />
      </div>
      <WebNavCardList dataList={navigationList!} />
      <BasePagination
        currentPage={currentPage}
        pageSize={WEB_PAGE_SIZE}
        total={count!}
        route='/explore'
        subRoute='/page'
        className='my-5 lg:my-10'
      />
    </>
  );
}
