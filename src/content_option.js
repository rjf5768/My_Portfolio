

const logotext = "Rong Feng";
const meta = {
    title: "Rong's Portfolio",
    description: "I am a undergraduate student at Penn State, studying in Computer Science and minor in Supply Chain & Information Science of Technology",
};

const introdata = {
    title: "I'm Rong Feng",
    animated: {
        first: "I love coding",
        second: "I'm interested in algorithms and AI",
        third: "I code cool websites",
    },
    description: "I am a undergraduate student at Penn State, studying in Computer Science and minor in Supply Chain & Information Science of Technology",
    your_img_url: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
};

const dataabout = {
    title: "Self-Evaluation",
    aboutme: " I am proactive, innovative, and diligent in my work, with a strong sense of responsibility. I am skilled atusing office automation software and excel at identifying, discovering, and solving problems at work, with strong analytical abilities. I am hands-on, conscientious, and have a strong sense of social responsibility. Although I am not very talkative, I am always able to pinpoint problems and propose solutions accurately. I have a solid foundation of theoretical knowledge and practical experience and strive to perform at my best and most stable state in every task. I enjoy taking on new challenges; every new product provides me with afresh experience and the opportunity to fully dedicate myself.",
};
const worktimeline = [{
        jobtitle: "Game Development (UE5)",
        where: "Independently explored game development",
        date: "2022",
    },
    {
        jobtitle: "Linear Device Project",
        where: "More details are available on my GitHub.",
        date: "2023",
    },
    {
        jobtitle: "Mobile App Development",
        where: "Developed a WeChat mini-program using HTML, CSS, JavaScript, and Node.js,",
        date: "2024",
    },
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "MySQL",
        value: 85,
    },
    {
        name: "Java",
        value: 80,
    },
    {
        name: "JavaScript",
        value: 80,
    },
    {
        name: "C",
        value: 75
    },
];

const services = [{
        title: "Key Courses",
        description: "Mathematical Statistics l/ll, Data Struc and Algor, Comp Org and Design, Prog Lang Concepts, PROG MODL BIG DATA, Intro Sys Progmg, Discrete Math, Oop With Web, Logic Comp Sci, PROG & COMP l/II, Matrices, Multivariable Calc",
    },
    /*
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },*/
];

const dataportfolio = [{
        img: "https://picsum.photos/400?grayscale",
        description: "My Resume",
        link: "https://www.linkedin.com/in/rong-feng-205b022a1/details/featured/1725397836592/single-media-viewer/?profileId=ACoAAEj04qUBSeA_j2yPJfxxsI1vMf9Wn4vwk4U",
    },/*
    {
        img: "https://picsum.photos/400/800/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },

    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/550/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },*/
];

const projectsData = [
    {
        id: 1,
        title: "Research Papers",
        category: "Academic",
        description: "Collection of my research papers and academic publications in computer science and algorithms.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        technologies: ["Research", "Algorithms", "AI", "Computer Science"],
        link: "#",
        demo: null
    },
    {
        id: 2,
        title: "Mobile App Demo",
        category: "Development",
        description: "A demonstration of my mobile application development skills with interactive features and modern UI/UX design.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        technologies: ["React Native", "JavaScript", "Mobile Development", "UI/UX"],
        link: "#",
        demo: "https://example.com/demo"
    },
    {
        id: 3,
        title: "Game Development (UE5)",
        category: "Gaming",
        description: "Independent game development project using Unreal Engine 5, showcasing 3D modeling and game mechanics.",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        technologies: ["Unreal Engine 5", "C++", "3D Modeling", "Game Design"],
        link: "#",
        demo: null
    },
    {
        id: 4,
        title: "Linear Device Project",
        category: "Hardware",
        description: "Hardware project involving linear device development with embedded systems and IoT integration.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        technologies: ["Embedded Systems", "IoT", "Hardware Design", "C"],
        link: "https://github.com/rjf5768",
        demo: null
    },
    {
        id: 5,
        title: "WeChat Mini-Program",
        category: "Web Development",
        description: "Developed a WeChat mini-program using HTML, CSS, JavaScript, and Node.js for enhanced user experience.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        technologies: ["HTML", "CSS", "JavaScript", "Node.js", "WeChat API"],
        link: "#",
        demo: null
    }
];

const resumeDownloadLink = "https://www.linkedin.com/in/rong-feng-205b022a1/details/featured/1725397836592/single-media-viewer/?profileId=ACoAAEj04qUBSeA_j2yPJfxxsI1vMf9Wn4vwk4U";

const contactConfig = {
    YOUR_EMAIL: "rjf5768@psu.edu",
    YOUR_FONE: "(941)5244589",
    description: "Feel free to Contact me! ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/rjf5768",
    facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/rong-feng-205b022a1/",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
    projectsData,
    resumeDownloadLink,
};