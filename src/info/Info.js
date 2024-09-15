import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export let singlePage = false;

export const info = {
  firstName: "Kalindu",
  lastName: "Sudaraka",
  initials: "KS",
  position: "a Software Engineer | Blogger",
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "👨🏻‍🎓",
      text: "3rd year IT undergraduate at SUSL",
    },
    {
      emoji: "📧",
      text: "sudarakakalindu20@gmail.com",
    },

    {
      emoji: "🌎",
      text: "based in Colombo, Sri Lanka",
    },
  ],
  socials: [
    {
      link: "https://www.linkedin.com/in/kalindu-sudaraka-3b24482a3/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://medium.com/@sudarakakalindu20",
      icon: "fa fa-medium",
      label: "medium",
    },
    {
      link: "https://github.com/Kalindusu",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://web.facebook.com/kalindu.sudaraka.1/",
      icon: "fa fa-facebook",
      label: "facebook",
    },
    {
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=sudarakakalindu20@gmailcom",
      icon: "fa fa-envelope",
      label: "facebook",
    },
  ],
  bio: "Hello! I'm Kalindu, a 3rd-year undergraduate at Sabaragamuwa University of Sri Lanka (SUSL). I'm passionate about full-stack development, where I enjoy crafting visually appealing and user-friendly web experiences while building robust and efficient backends. Whether it's designing a responsive frontend or engineering a scalable backend, I'm dedicated to delivering seamless and impactful solutions. Let's build something amazing together!",
  skills: {
    professional: [
      "Languages - (Java , C++ ,Javascript )",
      "Web Development - ( HTML , CSS , JavaScript , Tailwind CSS , React js , bootstrap , Redux , Node js , Express js )",
      "App Development - ( React Native )",
      "Database- ( MySql , Mongodb )",
      "Framework- ( Spring Boot )",
      "QA Tools- ( Selenium )",
      "Blogging- ( Medium )",
    ],
    softskills: [
      {
        label: "communication",
        emoji: "🗣️",
      },
      {
        label: "teamwork",
        emoji: "🫂",
      },
      {
        label: "leadership",
        emoji: "👥",
      },
      {
        label: "problem solving",
        emoji: "🤔",
      },
      {
       label: "Self learning",
       emoji: "📖",
      },
      {
        label: "adaptability",
        emoji: "🤝🏻",
      },
      {
        label: "time management",
        emoji: "🕒",
      },
      {
        label: "innovation & Creative",
        emoji: "🤖",
      },
    ],
  },
  achive: {
   
    education: [
      "BSc (Hons) in Computing and Information Systems at Sabaragamuwa University of Sri Lanka ( 2021 - Present )",
      "GCE A/L - 2020 ( Physical Science Stream )",
      "GCE O/L - 2016"

    ],
    certification: [
      "React Advance by Meta",
      "React Basic by Meta",
      "Front-End Web Development by University of Moratuwa",
      "HTML , CSS and Javascript by Johns Hopkins University",
      "Web Design for Beginners by University of Moratuwa",
      "Introduction to Java by Sololearn",
    ],
  },
  hobyskill: {

    work:[
      "I have six months of work experience as a trainer at People's Bank (Jan.2023 - Jul.2023)",

    ],
    hobbies: [
      {
        label: "reading",
        emoji: "📖",
      },
      {
        label: "traveling",
        emoji: "🚶",
      },
      {
        label: "coding",
        emoji: "🖥️",
      },
      {
        label: "Blogging",
        emoji: "🌶",
      },
    ],
    
  },

  portfolio: [
    
    {
      title: "Project 1",
      live: "https://paytonpierce.dev", 
      source: "https://github.com/paytonjewell", 
      image: mock1,
    },
    {
      title: "Project 2",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock2,
    },
    {
      title: "Project 3",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock3,
    },
    {
      title: "Project 4",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock4,
    },
    {
      title: "Project 5",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock5,
    },
  ],
};
