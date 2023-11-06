export const navigation = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Work', path: '/work' },
  { label: 'Blog', path: '/blog' },
];

export const hero = {
  title: 'Full-Stack Developer',
  subtitle:
    "Hi, I'm Nehemie, a Full-Stack Developer weaving robust back-end and intuitive design to craft impactful web apps, aiming to innovate and elevate user experiences.",
};

export const selectedWork = {
  title: 'Selected work',
  more: {
    label: 'See All Work',
    path: '/work',
  },
  work: [
    {
      title: 'Career Compass',
      link: 'https://career-compass.ch/',
      mockup: '/mockups/test-1.webp',
      description: 'React, Tailwind, Node.js (express), MongoDB',
    },
    {
      title: 'Pulse',
      link: 'https://pulse-app.ch/',
      mockup: '/mockups/test-2.webp',
      description: 'React, Scss, Next.js, Prisma, PostgreSQL',
    },
    {
      title: 'Text Guard',
      link: 'https://nehemie-textguard.vercel.app/',
      mockup: '/mockups/test-3.jpg',
      description: 'React, Tailwind, Next.js, tsup, Changesets',
    },
    {
      title: 'Open Sense',
      link: 'https://open-sense.ch/',
      mockup: '/mockups/test-4.jpg',
      description: 'React, Tailwind, Node.js (express), MongoDB',
    },
  ],
};

export const posts = {
  title: 'Recent posts',
  more: {
    label: 'See All posts',
    path: '/blog',
  },
  recentPosts: [
    {
      title: 'Emerys: A Decentralized exchange application',
      link: '/blog/emerys-a-decentralized-exchange-application',
      date: 'Mar 7, 2023',
    },
    {
      title: 'What happens when we type ls -l *.c in the terminal ?',
      link: '/blog/what-happens-when-we-type-ls-l-c-in-the-terminal',
      date: 'Aug 2, 2022',
    },
  ],
};

export const externalLinks = [
  {
    label: 'Github',
    link: 'https://github.com/NehemieMbg',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/nehemie-mombanga',
  },
  {
    label: 'Dribbble',
    link: 'https://dribbble.com/6nehemie',
  },
  {
    label: 'Behance',
    link: 'https://www.behance.net/nehemiemombanga1',
  },
  {
    label: 'Contact Me',
    link: 'mailto:nehemie.mbg@gmail.com',
  },
];
