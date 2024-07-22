import { useTranslations } from 'next-intl';

export default function Faq() {
  const t = useTranslations('Faq');
  return (
    <div className='mx-auto max-w-pc space-y-8 pb-5'>
      <h1 className='text-center text-2xl font-bold lg:pb-3 lg:text-3xl'>{t('title')}</h1>
      <div className='flex flex-col items-center justify-center'>
        <div className='collapse collapse-arrow w-3/4 bg-slate-100'>
          <input type='checkbox' />
          <div className='collapse-title text-xl font-medium'>{t('1.question')}</div>
          <div className='collapse-content'>
            <p>{t('1.answer')}</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <div className='collapse collapse-arrow w-3/4 bg-slate-100'>
          <input type='checkbox' />
          <div className='collapse-title text-xl font-medium'>{t('2.question')}</div>
          <div className='collapse-content'>
            <p>{t('2.answer-1')}</p>
            <p>{t('2.answer-2')}</p>
            <p>{t('2.answer-3')}</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <div className='collapse collapse-arrow w-3/4 bg-slate-100'>
          <input type='checkbox' />
          <div className='collapse-title text-xl font-medium'>{t('3.question')}</div>
          <div className='collapse-content'>
            <p>{t('3.answer-1')}</p>
            <p>{t('3.answer-2')}</p>
            <p>{t('3.answer-3')}</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <div className='collapse collapse-arrow w-3/4 bg-slate-100'>
          <input type='checkbox' />
          <div className='collapse-title text-xl font-medium'>{t('4.question')}</div>
          <div className='collapse-content'>
            <p>{t('4.answer')}</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <div className='collapse collapse-arrow w-3/4 bg-slate-100'>
          <input type='checkbox' />
          <div className='collapse-title text-xl font-medium'>{t('5.question')}</div>
          <div className='collapse-content'>
            <p>{t('5.answer')}</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <div className='collapse collapse-arrow w-3/4 bg-slate-100'>
          <input type='checkbox' />
          <div className='collapse-title text-xl font-medium'>{t('6.question')}</div>
          <div className='collapse-content'>
            <p>{t('6.answer')}</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <div className='collapse collapse-arrow w-3/4 bg-slate-100'>
          <input type='checkbox' />
          <div className='collapse-title text-xl font-medium'>{t('7.question')}</div>
          <div className='collapse-content'>
            <p>{t('7.answer')}</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <div className='collapse collapse-arrow w-3/4 bg-slate-100'>
          <input type='checkbox' />
          <div className='collapse-title text-xl font-medium'>{t('8.question')}</div>
          <div className='collapse-content'>
            <p>{t('8.answer')}</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <div className='collapse collapse-arrow w-3/4 bg-slate-100'>
          <input type='checkbox' />
          <div className='collapse-title text-xl font-medium'>{t('9.question')}</div>
          <div className='collapse-content'>
            <p>{t('9.answer')}</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <div className='collapse collapse-arrow w-3/4 bg-slate-100'>
          <input type='checkbox' />
          <div className='collapse-title text-xl font-medium'>{t('10.question')}</div>
          <div className='collapse-content'>
            <p>{t('10.answer')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
