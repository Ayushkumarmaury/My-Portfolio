import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    nodejs,
    pricewise,
    react,
    redux,
    snapgram,
    summiz,
    tailwindcss,
    threads
} from "../assets/icons";




export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Fresher",
        company_name: "MERN Stack Developer",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "2025",
        points: [
            "Developing and maintaining MERN Stack based Applications.",
            // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            // "Implementing responsive design and ensuring cross-browser compatibility.",
            // "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    // {
    //     title: "React Native Developer",
    //     company_name: "Tesla",
    //     icon: tesla,
    //     iconBg: "#fbc3bc",
    //     date: "Jan 2021 - Feb 2022",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#b7e4c7",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Ayushkumarmaury',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/ayush-maurya-54395123b',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Memorial App',
        description: 'MERN Stack based application where user can upload photos and save personalized notes. (Technology used -> MongoDB, Node js, Express js, React js, Tailwind Css)',
        link: '',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'BookStore App',
        description: 'Mern Stack based application where user can store and manage detailed information about books. (Technology used -> MongoDB, Node js, Express js, React js, Tailwind Css)',
        link: '',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Doctor Appointment App',
        description: 'Built a complete front-end of doctor appointment application using React js, Html, Tailwind Css.',
        link: '',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Photo Editor Website',
        description: 'Built a complete website that Allowing users to edit images by tools such as filters, rotate and flip. (Technology used -> Html, Css, JavaScript)',
        link: 'https://ayushkumarmaury.github.io/Photo-Editor-website',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Weather App',
        description: 'Developed a web application Enabling users to access real time weather data. (Technology used -> Weather API, Django, Html, Css)',
        link: '',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Advanced Flappy Bird Game',
        description: 'Built a Flappy Bird Game using  JavaScript, Html, Css and Html-5 Canvas.',
        link: 'https://ayushkumarmaury.github.io/Flappy-Bird',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Raven blaster Game',
        description: 'Built a Raven blaster Game using  JavaScript, Html, Css and Html-5 Canvas.',
        link: 'https://ayushkumarmaury.github.io/Raven-Blaster-Game',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Attackers Game',
        description: 'Built a Attackers Game using  JavaScript, Html, Css and Html-5 Canvas.',
        link: 'https://ayushkumarmaury.github.io/Attacker-Game',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Heart Disease Prediction Model',
        description: 'Developed a machine learning model to predict heart disease based on patient health indicators, using technique like Logistic Regression. Gained hands-on experience with Python, Scikit-Learn, Pandas, NumPy, Matplotlib and Colab notebook.',
        link: 'https://colab.research.google.com/drive/1b9yvfWiGxpd473WQC_XpEJA1uUvfTIoc',
    }
];
