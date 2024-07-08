'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          type='button'
          onClick={scrollToTop}
          className='fixed bottom-52 right-10 hidden items-center justify-center rounded-full bg-gray-400  p-2 text-white hover:bg-orange-400 hover:opacity-70 lg:flex'
        >
          <ArrowUp />
          <span className='sr-only'>Go to Top</span>
        </button>
      )}
    </div>
  );
}
