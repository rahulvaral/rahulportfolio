// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: require('../assets/img/bg.jpg'),
  firstName: "Rahul",
  middleName: "",
  lastName: "Varal",
  message: "A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product",
  img: require('../editable-stuff/rahulvaral.png'),
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/rahulvaral",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/rahul.varal.338",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/rahul.varal/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/rahul-varal-a7b0b616a/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/rahulvaral/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/rahulvaral.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: "",
  imageSize: 375,
  message:
    " Hello! My name is Rahul and I enjoy creating things that live on the internet. My interest in web development started back in 2019 when I decided to try editing custom themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS. Interested in the entire frontend spectrum and working on ambitious projects with positive people.",
  resume: "https://drive.google.com/file/d/1MwzVHKTxETFUiNslESdDR4xKZ8KCYe20/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "rahulvaral", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: "",//require("../editable-stuff/rahulvaral.png"), 
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: "",//require("../editable-stuff/rahulvaral.png"), 
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width: "615",
    height: "450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "React Js", value: 85 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 70 },
    { name: "JavaScript", value: 90 },
    { name: "TypeScript", value: 90 },
    { name: "HTML 5", value: 87 },
    { name: "CSS 3", value: 90 },
    { name: "Angular 2+", value: 70 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!",
  email: "rahul.varal@outlook.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Sr. Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/magic.png'),
      date: 'February 2023 – Present',
    },
    {
      role: 'Web UI Developer',
      companylogo: require('../assets/img/apptware.jpeg'),
      date: 'April 2022 – February 2023',
    },
    {
      role: 'Software Engineer',
      companylogo: require('../assets/img/aloha.jpeg'),
      date: 'June 2019 – December 2021',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
