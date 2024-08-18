import project1 from "../assets/projects/nalepka.jpg";
import project2 from "../assets/projects/meteos.png";
import project3 from "../assets/projects/JHlogo500.svg";

export const HERO_CONTENT = `I am an enthusiastic and open-minded individual with a strong passion for exploring and learning within the dynamic field of Information Technology. I am constantly seeking opportunities to expand my knowledge and gain valuable experiences that will contribute to my professional growth. My eagerness to learn drives me to stay updated with the latest advancements and trends in the industry, ensuring that I am always equipped with the most relevant skills and insights. I am committed to embracing new challenges and leveraging my curiosity to innovate and excel in various IT domains.`;

export const ABOUT_TEXT = `I am a passionate and driven individual with a keen interest in the fields of Internet of Things (IoT) and software development. Currently, I am pursuing my studies at VUT FIT, where I am constantly expanding my knowledge and honing my skills.

My technical expertise includes a diverse range of programming languages and tools. I am proficient in HTML, CSS, JavaScript, C, C++, and have a foundational understanding of C# and .NET. Additionally, I am skilled in Python, Figma, Linux, Git, Bash, MariaDB, MySQL, PostgreSQL, Visual Studio Code, Visual Studio, React, and Tailwind CSS.

I am always eager to learn and take on new challenges, aiming to leverage my skills to create innovative solutions and contribute to the ever-evolving tech landscape.`;

export const EXPERIENCES = [
  {
    year: "2019 - Present",
    role: "IT Support Technician & Social Media Manager",
    company: "Harňák s.r.o.",
    description: `Manage networks, maintain and repair computers, support printers, handle social media and online marketing, and solve technical issues.`,
    technologies: ["-", "-", "-", "-"],
  },
  {
    year: "2021 - 2021",
    role: "IT Support Technician",
    company: "Leoni",
    description: `Assist in setting up workstations, managing emails, handling open tickets in ServiceNow, and documenting system changes to ensure smooth IT operations`,
    technologies: ["-", "-", "-", "-"],
  },
];

export const EDUCATION = [
  {
    year: "2023 - Present",
    school: "Brno University of Technology",
    type: "Faculty of Information Technology",
  },
  {
    year: "2019-2023",
    school: "SOŠ Informačních technologií sv. Jána Bosca",
    type: "Informatics and Electronics",
  },
];

export const PROJECTS = [
  {
    title: "Graphic Design",
    image: project1,
    description:
      "Graphic design project for a client, involving the creation of a logo and branding materials.",
    technologies: ["Figma"],
  },
  {
    title: "Meteos",
    image: project2,
    description:
      "An IoT weather station that collects and displays real-time and predicted weather data.",
    technologies: ["NodeRed", "Mikro python", "JS", "SQL"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind CSS", "Vite"],
  },
];

export const CONTACT = {
  address: "Na záhumní, Klobušice , Slovakia",
  phoneNo: "+421948257018",
  email: "harnakjakub@gmail.com",
};
