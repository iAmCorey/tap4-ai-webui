import Image from 'next/image';
import ChatGPTImage from '@/public/images/chatgpt.png';
import GammaImage from '@/public/images/gamma.jpeg';
import PPXImage from '@/public/images/perplexity.png';
import POEImage from '@/public/images/poe.png';
import SUPImage from '@/public/images/supabase.webp';

const avatars: {
  alt: string;
  src: any;
}[] = [
  {
    alt: 'Product',
    // Ideally, load from a statically generated image for better SEO performance (import userImage from '@/public/userImage.png')
    src: ChatGPTImage,
  },
  {
    alt: 'Product',
    src: GammaImage,
  },
  {
    alt: 'Product',
    src: PPXImage,
  },
  {
    alt: 'Product',
    src: POEImage,
  },
  {
    alt: 'Product',
    src: SUPImage,
  },
];

export default function TestimonialsAvatars({ priority }: { priority?: boolean }) {
  return (
    <div className='flex flex-col items-center justify-center gap-3 md:flex-row md:items-start'>
      {/* AVATARS */}
      <div className='justy-start avatar-group -space-x-5'>
        {avatars.map((image, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className='avatar h-10 w-10' key={i}>
            <Image
              src={image.src}
              alt={image.alt}
              priority={priority}
              width={30}
              height={30}
              className='duration-200 ease-in-out hover:scale-[1.23]'
            />
          </div>
        ))}
      </div>

      {/* RATING */}
      <div className='flex flex-col items-center justify-center gap-1 md:items-start'>
        <div className='rating'>
          {[...Array(5)].map((_, i) => (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='h-5 w-5 text-yellow-500'
              // eslint-disable-next-line react/no-array-index-key
              key={i}
            >
              <path
                fillRule='evenodd'
                d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                clipRule='evenodd'
              />
            </svg>
          ))}
        </div>

        <div className='text-xs uppercase italic tracking-wider text-base-content/80'>
          <span className='font-semibold text-base-content'>12,129</span> products featured.
        </div>
      </div>
    </div>
  );
}
