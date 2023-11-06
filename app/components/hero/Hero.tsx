import GitHubIcon from '../icons/GitHubIcon';
import BehanceIcon from '../icons/BehanceIcon';
import DribbbleIcon from '../icons/DribbbleIcon';
import LinkedInIcon from '../icons/LinkedInIcon';

import { hero } from '@/app/constants';

const Hero = () => {
  return (
    <section className="flex flex-col gap-8 items-center justify-center py-10">
      <h1 className="text-center">{hero.title}</h1>

      <p className="text-neutral-400 font-light text-center max-w-[637px]">
        {hero.subtitle}
      </p>

      <div className="flex items-center gap-4 fill-white">
        <a
          href="https://www.linkedin.com/in/nehemie-mombanga"
          target="_blank"
          className="fill-white"
        >
          <LinkedInIcon className="h-6 w-6" />
        </a>
        <a
          href="https://github.com/NehemieMbg"
          target="_blank"
          className="fill-white"
        >
          <GitHubIcon className="h-6 w-6" />
        </a>
        <a
          href="https://www.behance.net/nehemiemombanga1"
          target="_blank"
          className="fill-white"
        >
          <BehanceIcon className="h-6 w-6" />
        </a>
        <a
          href="https://dribbble.com/6nehemie"
          target="_blank"
          className="fill-white"
        >
          <DribbbleIcon className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};
export default Hero;
