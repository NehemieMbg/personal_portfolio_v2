import Link from 'next/link';
import { selectedWork } from '@/app/constants';
import { work } from '@/app/constants';
import WorkCard from '../cards/WorkCard';
import WorkCard2 from '../cards/WorkCard2';
import WorkCard3 from '../cards/WorkCard3';

const SelectedWork = () => {
  const work1 = selectedWork.work[0];
  const work2 = selectedWork.work[1];
  const work3 = selectedWork.work[2];
  const work4 = selectedWork.work[3];
  const work5 = work.work[4];

  return (
    <section className="flex flex-col gap-10 max-md:gap-6">
      <div className="flex items-center justify-between font-light">
        <h3>{selectedWork.title}</h3>
        <Link
          href={selectedWork.more.path}
          className="hover:text-red-400 transition-colors duration-200"
        >
          {selectedWork.more.label}
        </Link>
      </div>

      <div className="col-span-2 mb-8">
        <WorkCard3 work={work5} />
      </div>

      <div className="work-grid">
        <div className="flex flex-col gap-8">
          <WorkCard work={work1} />
          <WorkCard2 work={work2} />
        </div>

        <div className="flex flex-col gap-8">
          <WorkCard2 work={work4} />
          <WorkCard work={work3} />
        </div>
      </div>
    </section>
  );
};
export default SelectedWork;
