import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate front-end developer with a knack for crafting robust and scalable web applications. With 3 months of hands-on experience, I have honed my skills in front-end technologies like React, Nextjs and Angular, as well as back-end technologies like Node.js and MySQL. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "March 2024 - June 2024",
    role: "Software Developer Intern",
    company: "Eclectus Technologies Inc.",
    description: `Develop a mobile application using Ionic Angular.
                  Assist colleagues in various Quality Assurance tasks.
                  Actively participating in Scrum sessions.`,
    technologies: ["Javascript", "Angular", "AngularJS", "SQLServer"],
  },
];

export const PROJECTS = [
  {
    title: "Monitoring System for Energy Conversion",
    image: project1,
    description:
      "Developed an innovative road hump system that converts the kinetic energy from passing vehicles into electricity. Designed and implemented a comprehensive monitoring system to track the number of vehicles required to fully charge the battery, monitor the current battery percentage, and estimate the time until the battery is depleted. Utilized programming languages such as Python, Java, and C#, along with SQL for database management.",
    technologies: ["Python", "Java", "C#", "SQL", "Arduino", "Raspberry Pi"],
  },
  {
    title: "Weather App",
    image: project2,
    description:
      "Developed a comprehensive weather mobile application with features including a 7-day forecast, UV index, sunrise and sunset times, air quality indicators, and minimum and maximum temperature readings. Leveraged OpenWeather API for data, utilized Ionic Angular framework, and employed HTML, CSS, JavaScript, and Android Studio for development ",
    technologies: ["HTML", "CSS", "Angular", "Javascript", "Android Studio"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
  {
    title: "Ice Cream Ordering System",
    image: project4,
    description:
      "The Ice Cream Ordering System is a web application designed to streamline the process of ordering ice cream, offering users a user-friendly interface to customize and place orders. The application was developed using Object-Oriented Programming (OOP) principles in Java, with MySQL as the database for storing order and product information, and NetBeans was used for building the graphical user interface (GUI). ",
    technologies: ["OOP", "Java", "MySQL", "Netbeans"],
  },
];

export const CONTACT = {
  address: "San Miguel, Padre Garcia, Batangas ",
  phoneNo: "0915-027-9297 ",
  email: "cuasayfritz@gmail.com",
};
