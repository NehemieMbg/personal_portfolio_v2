'use client';

import Image from 'next/image';
import { navigation } from '@/app/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const currPath = pathname.split('/')[1];

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

      <div className="h-12 w-12 flex items-center justify-center aspect-square rounded-full overflow-hidden border border-neutral-800 bg-dark-gray">
        {/* <Bars2Icon /> */}
      </div>
    </nav>
  );
};
export default Navbar;
