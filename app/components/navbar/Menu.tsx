'use client';

import { navigation, externalLinks } from '@/app/constants';
import { ArrowDownRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<MenuProps> = ({ isMenuOpen, setIsMenuOpen }) => {
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
    <>
      <div
        className={`md:hidden fixed top-0 bottom-0 right-0 left-0 z-[99] bg-black bg-opacity-40
	 ${isMenuOpen ? 'visible' : 'invisible'} 
	  `}
      ></div>

      <div
        className={`md:hidden fixed flex flex-col gap-8 justify-center z-[100] p-8 w-full top-0 right-0 h-screen bg-dark-gray border-l border-l-neutral-800 transition-transform ease-in duration-200
	 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} 
	  `}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-12 right-12 text-white hover:text-neutral-500 transition-colors duration-200"
        >
          <XMarkIcon className="h-8" />
        </button>

        <div className="flex flex-col gap-2 text-3xl font-light text-neutral-400">
          {navigation.map((nav) => (
            <Link
              href={nav.path}
              key={nav.label}
              className={`flex items-end gap-4 hover:text-white transition-colors duration-200 w-max
			 ${handleNavHighlight(nav.path) && 'text-white'} 
			  `}
            >
              <ArrowDownRightIcon
                className={`h-5 
			 ${handleNavHighlight(nav.path) ? 'visible' : 'invisible'} 
			  `}
              />
              <span>{nav.label}</span>
            </Link>
          ))}
        </div>

        <div className="w-full h-[1px] pl-9">
          <div className="bg-neutral-700 h-[1px]"></div>
        </div>

        <div className="flex flex-col gap-2 font-light text-neutral-400 pl-9">
          {externalLinks.map((link) => (
            <a
              href={link.link}
              target="_blank"
              key={link.label}
              className="w-max hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
export default Menu;
