type Experience = {
  jobTitle: string;
  companyName: string;
  period: string;
  description: string;
  img: {
    src: string;
    alt: string;
  };
};

export const EXPERIENCE: Experience[] = [
  {
    jobTitle: "Software Developer",
    companyName: "torqapp.io",
    period: "2023 - Present",
    description:
      "Led development of a robust, scalable React web app in 4 months, improved Flutter UI performance by 50%, boosted crash-free sessions, and collaborated on user-centered design.",
    img: {
      src: "/media/torq.webp",
      alt: "TORQ App",
    },
  },
  {
    jobTitle: "Software Developer",
    companyName: "alamoalgorithmics.com",
    period: "2020 - Present",
    description:
      "I transformed Figma designs into fully true, responsive React pages. I led an insurer management system project with React and Nest.js, and mentored junior developers, helping them level up in React and TypeScript along the way.",
    img: {
      src: "/media/alamo.png",
      alt: "Alamo Algorithmics",
    },
  },
];
