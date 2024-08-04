import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CoffeeImg from '@/public/images/buymeacoffee.png';

function CoffeeIcon() {
  return (
    <Link href='https://ko-fi.com/coreychiu' target='_blank'>
      <Image width={24} height={24} src={CoffeeImg} alt='buy-me-a-coffee' />
    </Link>
  );
}

export default CoffeeIcon;
