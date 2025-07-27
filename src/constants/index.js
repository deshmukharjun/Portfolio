export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,  
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Projects',
    href: '#projects',
  },

  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: 'Valorant Landing Page',
    desc: 'A React and GSAP-powered landing page for Valorant with advanced animations.',
    subdesc: 'Built to showcase expertise in React and GSAP animations, creating an immersive user experience.',
    href: 'https://valorant-react-web-app.vercel.app/',
    texture: '/textures/project/project2.webm',
    logo: '/assets/valorant.svg',
    logoStyle: {
      backgroundColor: '#ff4655',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #444444',
    },
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'GSAP', path: '/assets/gsap.svg' },
    ],
  },
  {
    title: 'iPhone 15 Pro Website',
    desc: 'A React and Three.js project showcasing a 3D iPhone model with color-changing animations on user input.',
    subdesc: 'Built with React, Three.js, Drei, and Tailwind CSS to demonstrate advanced animation and 3D modeling skills.',
    href: 'https://iphone-react-js.vercel.app/',
    texture: '/textures/project/project1.webm',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#ffffff',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #444444',
    },
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'Three.js', path: '/assets/threejs.svg' },
      { id: 3, name: 'Drei', path: '/assets/drei.svg' },
      { id: 4, name: 'TailwindCSS', path: '/assets/tailwind.svg' },
    ],
  },

  {
    title: 'Movies React Website',
    desc: 'A React and Tailwind CSS website that uses the TMDB API to feature a dynamic top 5 trending movies section.',
    subdesc: 'Shows real-time trending movies based on user searches, similar to Netflix.',
    href: 'https://movie-app-react-jet.vercel.app/',
    texture: '/textures/project/project3.webm',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#ffffff',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #444444',
    },
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: '/assets/tailwind.svg' },
      { id: 3, name: 'TMDB API', path: '/assets/tmdb.svg' },
    ],
  },
  {
    title: 'Frick Incognito',
    desc: 'A Three.js and React project for a digital marktech company, featuring a red moon with floating images from past projects.',
    subdesc: 'Built using Three.js and React to create an interactive 3D experience showcasing company work.',
    href: 'https://www.thefrick.in/Incognito',
    texture: '/textures/project/project4.webm',
    logo: '/assets/fricklogo.svg',
    logoStyle: {
      backgroundColor: '#ffffff',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #444444',
    },
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'Three.js', path: '/assets/threejs.svg' },
    ],
  },
  {
    title: 'House of Jobhan',
    desc: 'A simple frontend website for a gifting company, built with HTML and CSS.',
    subdesc: 'Created with a minimalist approach to provide a seamless user experience.',
    href: '',
    texture: '/textures/project/project5.webm',
    logo: '/assets/hojlogo.svg',
    logoStyle: {
      backgroundColor: '#506C60',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #444444',
    },
    tags: [
      { id: 1, name: 'HTML', path: '/assets/html.svg' },
      { id: 2, name: 'CSS', path: '/assets/css.svg' },
    ],
  },
];

export const myAppProjects = [
  {
    title: 'Manache 5 Ganapati App',
    desc: 'An Android app providing real-time updates about the Manache Ganpati in Pune, built using Java and Google Maps API. 🏛📍',
    subdesc: 'Developed in Android Studio using Java, this app allows users to view live updates on the 5 Manache Ganpati locations in Pune. It features Google Maps integration for real-time navigation, ensuring devotees can easily locate and visit each Ganpati pandal during the festival.',
    href: 'https://github.com/deshmukharjun/Manache-5',
    texture: '/textures/project/manache_demo.webm',
    logo: '/assets/manache.svg',
    logoStyle: {
      backgroundColor: '#320707',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #444444',
    },
    tags: [
      { id: 1, name: 'Android Studio', path: '/assets/android.svg' },
      { id: 2, name: 'Java', path: '/assets/java.svg' },
      { id: 3, name: 'Google Maps API', path: '/assets/googlemaps.svg' },
    ],
  },
  {
    title: 'Tic-Tac-Two',
    desc: 'An advanced version of Tic-Tac-Toe where your first move vanishes when you make your fourth move. ♟📱',
    subdesc: 'Developed in Android Studio using Java, this game introduces a new level of strategy where only the last three moves of each player remain visible, eliminating the possibility of a tie. The game features smooth animations and an intuitive UI for a competitive experience.',
    href: 'https://github.com/deshmukharjun/Tic-Tac-Two',
    texture: '/textures/project/ttt_demo.webm',
    logo: '/assets/tictactwo.png',
    logoStyle: {
      backgroundColor: '#ffffff',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #444444',
    },
    tags: [
      { id: 1, name: 'Android Studio', path: '/assets/android.svg' },
      { id: 2, name: 'Java', path: '/assets/java.svg' },
      { id: 3, name: 'Google Firebase', path: '/assets/firebase.svg' },
    ],
  },
  {
    title: 'SwipeFlix',
    desc: 'A movie-matching app like Tinder, helping groups decide on a movie to watch. 🎥🔥',
    subdesc: 'Built in Kotlin with Firebase as the backend, this app allows friends to join a session, swipe on movies they like or dislike, and select a final movie based on majority votes. It integrates the TMDB API for fetching real-time movie data and features an engaging swipe-based UI.',
    href: 'https://github.com/vishesh2201/SwipeFlix',
    texture: '/textures/project/swipeflix_demo.webm',
    logo: '/assets/swipeflix.svg',
    logoStyle: {
      backgroundColor: '#005E7C',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #444444',
    },
    tags: [
      { id: 1, name: 'Android Studio', path: '/assets/android.svg' },
      { id: 2, name: 'Kotlin', path: '/assets/kotlin.svg' },
      { id: 3, name: 'Google Firebase', path: '/assets/firebase.svg' },
      { id: 4, name: 'TMDB API', path: '/assets/tmdb.svg' },
    ],
  },
  {
    title: 'Guess The Flag',
    desc: 'A fun quiz game where you identify country flags, featuring a hint system and score tracking. 🚩🧠',
    subdesc: 'This interactive Kotlin-based quiz game tests users on their knowledge of world flags. Players get four multiple-choice options per question, with a hint system to assist them. The app maintains a scorekeeping system and features a simple, engaging UI for an enjoyable learning experience.',
    href: 'https://github.com/deshmukharjun/GuessTheFlag-App',
    texture: '/textures/project/guesstheflag_demo.webm',
    logo: '/assets/guesstheflag.jpg',
    logoStyle: {
      backgroundColor: '#8eb5f0',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #444444',
    },
    tags: [
      { id: 1, name: 'Android Studio', path: '/assets/android.svg' },
      { id: 2, name: 'Kotlin', path: '/assets/kotlin.svg' },
    ],
  },
  {
    title: 'BookMyTurf',
    desc: 'An online turf booking app, migrating the offline booking process to a digital platform. 🏟📅',
    subdesc: 'Developed in Java with Firebase integration, this app allows users to check available slots and book sports turfs online. While only a frontend project for college, it includes a functional UI with real-time booking updates powered by Firebase.',
    href: 'https://github.com/deshmukharjun',
    texture: '/textures/project/bookmyturf_demo.webm',
    logo: '/assets/bmt.svg',
    logoStyle: {
      backgroundColor: '#32CD9F',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #444444',
    },
    tags: [
      { id: 1, name: 'Android Studio', path: '/assets/android.svg' },
      { id: 2, name: 'Java', path: '/assets/java.svg' },
      { id: 3, name: 'Google Firebase', path: '/assets/firebase.svg' },
    ],
  },
];



export const calculateSizes = (isSmall, isMobile) => {
  return {
    cubeScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    cubePosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
  };
};

export const workExperiences = [
  {
    id: 1,  
    company_name: 'Frick Incognito',
    title: 'Front End Developer',
    date: '2024 - Present',
    description: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: '/assets/work.svg',
    iconBg: "#ff0000",
    points: [
      "Creating interactive three.js websites.",
      "Collaborating with designers and developers for UI.",
      "Bringing designs to life before actual development."
    ],
  },
  {
    id: 2,
    company_name: "Artist's Cut",
    title: 'Video Editor',
    date: '2022 - 2023',
    description: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations.",
    icon: '/assets/work.svg',
    iconBg: "#000000",
    points: [
      "Started a youtube channel that gained 30,000 Subscribers.",
      "Used SEO Tricks to get 50 Million Total Views.",
      "Edited engaging youtube shorts."
    ],
  },
  {
    id: 3,
    company_name: 'Aphro-D',
    title: 'Video/3D Artist',
    date: '2021 - 2022',
    description: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to implementation details is well-documented.",
    icon: '/assets/work.svg',
    iconBg: "#000000",
    points: [
      "Made 3D renders and models for this supliment company.",
      "Editing workout and talking head videos.",
      "Created a brand identity and guidelines."
    ],
  },
];
export const EducationExperiences = [
  {
    id: 1,  
    company_name: 'Pune University',
    title: 'AIML',
    date: '2022 - 2026',
    description: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: '/assets/school.svg',
    iconBg: "#ff0000",
    points: [
      "Currently in 3rd Year of AIML Branch.",
      "Empulse Artilect Event Design Head for the year 2023",
      "Working hard to handle a good pointer while doing an Internship."
    ],
  },
  {
    id: 2,
    company_name: "SSVM Jr College",
    title: 'Science',
    date: '2020 - 2022',
    description: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations.",
    icon: '/assets/school.svg',
    iconBg: "#000000",
    points: [
      "Completed my 12th in Science with Electronics.",
      "Learned higher level mathematics while studying for JEE.",
    ],
  },
  {
    id: 3,
    company_name: 'KHS Aundh',
    title: 'Highschool',
    date: '2008 - 2020',
    description: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to implementation details is well-documented.",
    icon: '/assets/school.svg',
    iconBg: "#000000",
    points: [
      "Completed my highschool at Kalmadi Shamrao Highschool, Aundh.",
      "Always in the computer lab either working on a school project or my own projects.",
    ],
  },
];

export const techStack = [
  { name: 'React', image: 'assets/react.svg' }, 
  { name: 'Three JS', image: 'assets/threejs.svg' },
  { name: 'Tailwind', image: 'assets/tailwind.svg' },
  { name: 'Android', image: 'assets/android.svg' },
  { name: 'Git', image: 'assets/git.svg' },
  { name: 'Firebase', image: 'assets/firebase.svg' },
  { name: 'Java', image: 'assets/java.svg' },
  { name: 'Kotlin', image: 'assets/kotlin.svg' },
];