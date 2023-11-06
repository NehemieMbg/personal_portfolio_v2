'use client';

import Image from 'next/image';
import { navigation } from '@/app/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars2Icon } from '@heroicons/react/24/outline';
import Menu from './Menu';
import { useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const currPath = pathname.split('/')[1];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavHighlight = (path: string) => {
    if (pathname === '/' && path === '/') {
      return true;
    }
    if (pathname === '/work' && path === '/work') {
      return true;
    }
    if (pathname === '/about' && path === '/about') {
      return true;
    }
    if (pathname === '/blog' && path === '/blog') {
      return true;
    }

    return false;
  };

  return (
    <>
      <nav className="relative max-w-wide w-full mx-auto flex justify-between items-center">
        <Link
          href={'/'}
          className="h-12 w-12 flex items-center justify-center aspect-square rounded-full overflow-hidden bg-neutral-200 hover:scale-105 transition-all duration-200"
        >
          <Image
            src="/images/emoji-2.png"
            height={48}
            width={48}
            alt="Nehemie Mombanga"
            className="scale-110 object-center object-cover -translate-x-[1px] translate-y-[1px]"
          />
        </Link>

        <div className="hidden fixed -translate-x-[50%] left-1/2 md:flex gap-6 text-sm bg-dark-gray border border-neutral-800 px-6 py-3.5 rounded-full">
          {navigation.map((nav) => (
            <Link
              href={nav.path}
              key={nav.label}
              className={`flex flex-col justify-center items-center gap-1 hover:text-teal-500 transition-colors duration-200
			${handleNavHighlight(nav.path) && 'text-teal-400'}
		  `}
            >
              <span>{nav.label}</span>
            </Link>
          ))}
        </div>

        <a
          href="mailto:nehemie.mbg@gmail.com"
          target="_blank"
          className="max-md:hidden font-inter text-sm text-dark-gray bg-teal-500 py-3.5 px-5 rounded-full hover:brightness-90 transition-all duration-200	"
        >
          Contact me
        </a>

        <button
          onClick={() => setIsMenuOpen(true)}
          className="hidden h-12 w-12 max-md:flex items-center justify-center aspect-square rounded-full overflow-hidden border border-neutral-800 bg-dark-gray hover:brightness-125 transition-brightness duration-200"
        >
          <Bars2Icon className="w-6" />
        </button>
      </nav>

      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
};
export default Navbar;
