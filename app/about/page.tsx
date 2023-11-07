import Image from 'next/image';
import { about } from '../constants';

const page = () => {
  return (
    <section className="max-w-wide mx-auto w-full pb-20">
      <h2 className="">{about.title}</h2>

      <div className="layout">
        <div className="flex gap-10">
          <div className="flex flex-col gap-6 font-light text-neutral-400 w-1/2 pr-10">
            {about.text.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
          <div className="w-1/2">
            <div className="w-full max-h-[311px] overflow-hidden rounded-xl bg-neutral-300 mb-8">
              <Image
                src={about.image}
                alt={about.title}
                layout="responsive"
                width={492}
                height={311}
                className="object-center object-cover w-full max-h-[311px]"
              />
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="font-light">
                <h4 className="text-sm text-neutral-400 font-light mb-1">
                  Email
                </h4>
                <a
                  href={'mailto:nehemie.mbg@gmail.com'}
                  target="_blank"
                  className="w-max hover:text-red-400 transition-colors duration-200"
                >
                  {about.email}
                </a>
              </div>

              <div className="font-light">
                <h4 className="text-sm text-neutral-400 font-light mb-1">
                  Phone
                </h4>
                <a
                  href={`tel:${about.phone}`}
                  target="_blank"
                  className="w-max hover:text-red-400 transition-colors duration-200"
                >
                  {about.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-14">
          <h3>Skills</h3>

          <div className="grid grid-cols-2 gap-8">
            <div className="font-light flex flex-col gap-8">
              {about.skills[0].map((skill, index) => (
                <p key={skill} className="pb-8 border-b border-b-neutral-800">
                  {skill}
                </p>
              ))}
            </div>

            <div className="font-light flex flex-col gap-8">
              {about.skills[1].map((skill, index) => (
                <p key={skill} className="pb-8 border-b border-b-neutral-800">
                  {skill}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-14">
          <div className="flex justify-between">
            <h3>Experience</h3>
            <a
              href={about.resume}
              target="_blank"
              download={about.resume}
              className="bg-dark-gray py-3.5 px-6 border border-neutral-800 cursor-pointer rounded-full hover:bg-neutral-900 transition-colors duration-200"
            >
              Download CV
            </a>
          </div>

          <div className="flex flex-col gap-8">
            {about.experience.map((experience, index) => (
              <div
                key={index}
                className="flex gap-10 font-light pb-8 border-b border-b-neutral-800"
              >
                <p className="min-w-[240px] text-neutral-400">
                  {experience.date}
                </p>

                <div className="flex flex-col gap-6 w-full">
                  <div>
                    <h4 className="mb-1">{experience.company}</h4>
                    <p className="text-sm text-neutral-400">
                      {experience.position}
                    </p>
                  </div>

                  <p className="font-light text-neutral-400 leading-7">
                    {experience.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default page;
