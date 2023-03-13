import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  excel,
  mac,
  agro,
  peer,
  board,
  zencode,
  tamasha,
  techcurator,
  girlscript,
  chatgpt,



} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Problem Setter",
    company_name: "Techcurator",
    icon: techcurator,
    iconBg: "#383E56",
    date: "November 2021 - Jan 2022",
    points: [

      "Active listening to the client and understand the customer requirements with the effective team communication designing the test cases.",

      "Creating a programming questions and End‑to‑end completion of questions from client‑side and after communicate effectively deploying the problems with solutions and test cases on the shared platform. ",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Tamasha",
    icon: tamasha,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - July 2021",
    points: [
      "Developing and maintaining web applications using Node.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "GSSOC'22",
    icon: girlscript,
    iconBg: "#383E56",
    date: " 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Excel Sheet",
    description:
    "Excel Clone is a web-based platform that offers numerous features similar to Microsoft Excel. It is a user-friendly platform that allows you to perform various tasks such as creating a new sheet, deleting a sheet, and renaming a sheet. It also allows you to perform various operations such as addition, subtraction, multiplication, and division.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: excel,
    source_code_link: "https://excel-clone-two.vercel.app/",
  },
  {
    name: "Mac OS Clone",
    description:
      "Mac OS Clone is a web application that allows you to enjoy numerous features of Apple Sierra OS, including playing music, using LinkedIn, and accessing Excel Clone. With its impressive capabilities, Mac OS Clone offers a user-friendly platform for various tasks.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: mac,
    source_code_link: "https://mac-os-clone-orcin.vercel.app/",
  },
  {
    name: "Peer 2 Code",
    description:
      "A comprehensive communication platform that enables users to communicate with their peers via voice and video calls while sharing its editor and whiteboard in an encrypted environment. With its advanced features, this platform provides a secure and user-friendly environment for effective collaboration.",
    tags: [
      {
        name: "react-js",
        color: "blue-text-gradient",
      },
      {
        name: "material-ui",
        color: "green-text-gradient",
      },
      {
        
        name: "peerjs",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      }
    ],
    image: peer,
    source_code_link: "https://github.com/creator79/Editor-React.git",
  },
  {
    name: "Zencode",
    description:
      "Zencode is a website that compresses and decompresses large files while demonstrating the decompression process through Huffman coding, a lossless data compression method. My project involves encoding data (Compress Data) and decoding it (Huffman Algorithm). The tree structure displays how the encoding was performed during the compression process..",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        
        name: "javascript",
        color: "pink-text-gradient",
      },
     
    ],
    image: zencode,
    source_code_link: "https://creator79.github.io/Zencode/",
  },
  {
    name: "ChatSonic",
    description:
      "ChatSonic is a web application that allows users to communicate with Ai where they can ask questions and get answers. ",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        
        name: "openai",
        color: "pink-text-gradient",
      },
     
    ],
    image: chatgpt,
    source_code_link: "https://chatgpt-plum-alpha.vercel.app/",
  },

];

export { services, technologies, experiences, testimonials, projects };
