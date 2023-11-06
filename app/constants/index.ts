export const navigation = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Work', path: '/work' },
  { label: 'Blog', path: '/blog' },
];

export const hero = {
  title: 'Full-Stack Developer & Design Innovator from Lille',
  subtitle:
    "Hi, I'm Nehemie, a Full-Stack Developer weaving robust back-end and intuitive design to craft impactful web apps, aiming to innovate and elevate user experiences.",
};

export const selectedWork = {
  title: 'Selected Work',
  more: {
    label: 'See more work',
    path: '/work',
  },
  work: [
    {
      title: 'Career Compass',
      link: 'https://career-compass.ch/',
      description: 'React, Tailwind, Node.js (express), MongoDB',
    },
    {
      title: 'Pulse',
      link: 'https://pulse-app.ch/',
      description: 'React, Scss, Next.js, Prisma, PostgreSQL',
    },
    {
      title: 'Text Guard',
      link: 'https://nehemie-textguard.vercel.app/',
      description: 'React, Tailwind, Next.js, tsup, Changesets',
    },
    {
      title: 'Open Sense',
      link: 'https://open-sense.ch/',
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
