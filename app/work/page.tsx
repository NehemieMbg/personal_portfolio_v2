import { WorkCard, WorkCard2, WorkCard3 } from '../components';
import { work } from '../constants';

const page = () => {
  const work1 = work.work[0];
  const work2 = work.work[1];
  const work3 = work.work[2];
  const work4 = work.work[3];
  const work5 = work.work[4];
  return (
    <section className="max-w-wide mx-auto w-full pb-20">
      <h2 className="">{work.title}</h2>

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
export default page;
