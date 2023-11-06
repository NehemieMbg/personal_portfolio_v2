import ExternalLinks from '../external-links/ExternalLinks';

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="flex max-md:flex-col-reverse gap-4 items-center justify-between max-w-wide mx-auto w-full">
      <p className="text-neutral-400 font-light text-sm">
        &copy;{date} – All Rights Reserved
      </p>

      <ExternalLinks />
    </footer>
  );
};
export default Footer;
