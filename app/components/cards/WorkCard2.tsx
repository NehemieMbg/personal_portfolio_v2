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

const WorkCard2: React.FC<WorkProps> = ({ work }) => {
  return (
    <div className="relative">
      <div className="work-item relative flex items-center justify-center w-full h-[661px] aspect-[1] bg-neutral-700 overflow-hidden rounded-xl mb-4 hover:filter hover:grayscale transition-all duration-200 ease-in-out">
        {work.mockup && (
          <Image
            src={work.mockup}
            alt={work.title}
            height={937}
            width={703}
            className="w-full h-full aspect-auto object-contain object-center absolute z-[10]"
          />
        )}

        <WorkBtn />
      </div>

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
export default WorkCard2;
