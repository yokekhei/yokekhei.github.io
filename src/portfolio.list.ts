import Portfolio from './portfolio';

export const portfolios: Portfolio[] = [
    {
        name: 'FlyAway',
        desc: 'An airline booking portal that allows users to manage flights in admin website, and book flights in guest website.',
        keywords: ['Java', 'Servlets', 'JSP', 'Hibernate'],
        repository: 'https://github.com/yokekhei/simplilearn_fsd_projects/tree/master/Phase-2/flyAway',
        demo: false,
        monthCreated: 10,
        yearCreated: 2020
    },
    {
        name: 'SportyShoes',
        desc: 'An e-commerce website for sporty shoes that allows users to manage products in admin website, and shopping in member website.',
        keywords: ['Java', 'Spring Boot', 'JPA', 'Hibernate', 'JSP'],
        repository: 'https://github.com/yokekhei/simplilearn_fsd_projects/tree/master/Phase-3/sportyShoes',
        demo: false,
        monthCreated: 11,
        yearCreated: 2020
    },
    {
        name: 'OnlineTest',
        desc: 'An online test application system that allows users to add quizzes in admin website, and play quizzes in guest website.',
        keywords: ['Java', 'Spring Boot', 'JPA', 'Hibernate', 'Angular'],
        repository: 'https://github.com/yokekhei/simplilearn_fsd_projects/tree/master/Phase-4/onlineTest',
        demo: false,
        monthCreated: 0,
        yearCreated: 2021
    },
    {
        name: 'CI/CD Deployment for Spring Boot Application',
        desc: 'This is a sample Java Spring Boot web application, built to demonstrate CI/CD pipeline for the continuous deployment of a Spring Boot application and hosting the application on AWS EC2 instance.',
        keywords: ['Java', 'Spring Boot', 'Selenium', 'DevOps', 'Docker', 'Jenkins'],
        repository: 'https://github.com/yokekhei/simplilearn_fsd_projects/tree/master/Phase-5/devOps',
        demo: false,
        monthCreated: 2,
        yearCreated: 2021
    },
    {
        name: 'Foodbox',
        desc: 'A food ordering system that allows users to manage master data such as food categories, food items and offers, view order and user reports in admin portal, whilst also allow users to view details of food categories and food items, search, filter and sort food items, add food items to cart, perform checkout and make payment in user portal.',
        keywords: ['Java', 'Spring Boot', 'JPA', 'Hibernate', 'Angular', 'Selenium', 'DevOps', 'Docker', 'Jenkins'],
        repository: 'https://github.com/yokekhei/simplilearn_fsd_projects/tree/master/Capstone/foodBox',
        demo: false,
        monthCreated: 3,
        yearCreated: 2021
    },
    {
        name: 'Decentralized Movie Rating Application',
        desc: 'A simple Solidity smart contract for tracking movie ratings and customer reviews.',
        keywords: ['Ethereum', 'Solidity', 'Truffle'],
        repository: 'https://github.com/yokekhei/dapp-movie-rating',
        demo: false,
        monthCreated: 7,
        yearCreated: 2021
    },
    {
        name: 'Decentralized Token Exchange',
        desc: 'Decentralized cryptocurrency exchange built with order book, trade panels and price chart.',
        keywords: ['Ethereum', 'Solidity', 'Truffle', 'React'],
        repository: 'http://lyk-token-exchange.s3-website-ap-southeast-1.amazonaws.com/',
        demo: true,
        monthCreated: 11,
        yearCreated: 2021
    }
];

export default portfolios;