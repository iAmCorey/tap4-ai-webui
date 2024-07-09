export default function TagItem({ title }: { title: string }) {
  return (
    <div className='w-fit rounded-lg border border-slate-200 bg-orange-400 px-1 text-center text-[10px] text-white'>
      {title}
    </div>
  );
}
