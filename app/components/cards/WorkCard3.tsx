import Image from 'next/image';
import WorkBtn from '../buttons/WorkBtn';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

interface WorkProps {
  work: {
    title: string;
    description: string;
    link: string;
    mockup?: string;
  };
}

const WorkCard3: React.FC<WorkProps> = ({ work }) => {
  return (
    <div className="relative h-max">
      <a
        href={work.link}
        target="_blank"
        className="work-item relative flex items-center justify-center w-full aspect-[1] h-[372px] bg-neutral-700 overflow-hidden rounded-xl mb-4 hover:filter hover:grayscale transition-all duration-200 ease-in-out"
      >
        {work.mockup && (
          <Image
            src={work.mockup}
            alt={work.title}
            height={1728}
            width={1117}
            className="h-full w-full aspect-auto object-cover object-center absolute z-[10]"
          />
        )}

        <WorkBtn />
      </a>

      <div className="flex flex-col gap-1">
        <a
          href={work.link}
          target="_blank"
          className="flex items-end gap-2 font-light hover:text-red-400 transition-colors duration-200 w-max"
        >
          <span>{work.title}</span>
          <ArrowUpRightIcon className="h-5" />
        </a>

        <p className="text-sm text-neutral-400 font-light">
          {work.description}
        </p>
      </div>
    </div>
  );
};
export default WorkCard3;
