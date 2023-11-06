import GitHubIcon from '../icons/GitHubIcon';
import BehanceIcon from '../icons/BehanceIcon';
import DribbbleIcon from '../icons/DribbbleIcon';
import LinkedInIcon from '../icons/LinkedInIcon';

import { hero } from '@/app/constants';
import ExternalLinks from '../external-links/ExternalLinks';

const Hero = () => {
  return (
    <section className="flex flex-col gap-8 items-center justify-center py-10">
      <h1 className="text-center">{hero.title}</h1>

      <p className="text-neutral-400 font-light text-center max-w-[637px]">
        {hero.subtitle}
      </p>

      <ExternalLinks />
    </section>
  );
};
export default Hero;
