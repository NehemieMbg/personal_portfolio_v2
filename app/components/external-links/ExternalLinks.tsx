import BehanceIcon from '../icons/BehanceIcon';
import DribbbleIcon from '../icons/DribbbleIcon';
import GitHubIcon from '../icons/GitHubIcon';
import LinkedInIcon from '../icons/LinkedInIcon';

const ExternalLinks = () => {
  return (
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
  );
};
export default ExternalLinks;
