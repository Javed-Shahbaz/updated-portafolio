// import bookstorereact3 from '../asset/images/projects_imgs/bookstorereact3.png';
import movies2 from "../asset/images/projects_imgs/movies2.png";
import spaceX from "../asset/images/projects_imgs/spaceX.png";
// import stock from '../asset/images/projects_imgs/stock.png';
import math from "../asset/images/projects_imgs/math-sc.png";
import htmlProject from "../asset/images/projects_imgs/html-project.png";

const projectDetailList = [
  {
    id: 0,
    name: "Popcorn Pulse",
    description:
      "Popcorn Pulse is a web app that uses Webpack, Jest, HTML, SCSS, and JavaScript. It fetches data from a movie API and displays the latest trendy movies. Users can like or leave comments on movies, with like and comment counts stored using another API.",
    imageLink: movies2,
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    role: "FrontEnd Dev",
    company: "Microverse",
    year: "2023",
    repoLink: "https://github.com/Javed-Shahbaz",
    demoLink: "https://wonderful-tulumba-37d181.netlify.app/",
  },
  {
    id: 1,
    name: "Space X",
    description:
      "This project is a web application that focus on rocket reservations and mission management. It allows users to reserve rockets for upcoming missions and provides a comprehensive overview of mission details. The application is built using React.js and Redux for state management.",
    imageLink: spaceX,
    technologies: ["HTML", "CSS", "React", "Redux"],
    role: "FrontEnd Dev",
    company: "Microverse",
    year: "2023",
    repoLink: "https://github.com/Javed-Shahbaz",
    demoLink: "https://grand-platypus-2cdfa7.netlify.app/",
  },
  {
    id: 2,
    name: "Math Magician",
    description:
      "Math Magicians Calculator app is a website for fans of mathematics. It is a Single Page App (SPA) that allows users to: 1)Make simple calculations. 2)Read a random math-related quote by fetching from an Api.",
    imageLink: math,
    technologies: ["HTML", "CSS", "React", "Redux"],
    role: "FrontEnd Dev",
    company: "Microverse",
    year: "2023",
    repoLink: "https://github.com/Javed-Shahbaz",
    demoLink: "https://math-magician-dvak.onrender.com",
  },
];

export default projectDetailList;
