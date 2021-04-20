import Portfolio from './portfolio';

export const portfolios: Portfolio[] = [
    {
        name: 'FlyAway',
        desc: 'An airline booking portal that allows users to manage flights in admin website, and book flights in guest website.',
        keywords: ['Java', 'Servlets', 'JSP', 'Hibernate'],
        repository: 'https://github.com/yokekhei/simplilearn_fsd_projects/tree/master/Phase-2/flyAway',
        monthCreated: 10,
        yearCreated: 2020
    },
    {
        name: 'SportyShoes',
        desc: 'An e-commerce website for sporty shoes that allows users to manage products in admin website, and shopping in member website.',
        keywords: ['Java', 'Spring Boot', 'JPA', 'Hibernate', 'JSP'],
        repository: 'https://github.com/yokekhei/simplilearn_fsd_projects/tree/master/Phase-3/sportyShoes',
        monthCreated: 11,
        yearCreated: 2020
    },
    {
        name: 'OnlineTest',
        desc: 'An online test application system that allows users to add quizzes in admin website, and play quizzes in guest website.',
        keywords: ['Java', 'Spring Boot', 'JPA', 'Hibernate', 'Angular'],
        repository: 'https://github.com/yokekhei/simplilearn_fsd_projects/tree/master/Phase-4/onlineTest',
        monthCreated: 0,
        yearCreated: 2021
    },
    {
        name: 'CI/CD Deployment for Spring Boot Application',
        desc: 'This is a sample Java Spring Boot web application, built to demonstrate CI/CD pipeline for the continuous deployment of a Spring Boot application and hosting the application on AWS EC2 instance.',
        keywords: ['Java', 'Spring Boot', 'DevOps', 'Docker', 'Jenkins'],
        repository: 'https://github.com/yokekhei/simplilearn_fsd_projects/tree/master/Phase-5/devOps',
        monthCreated: 2,
        yearCreated: 2021
    },
    {
        name: 'Foodbox',
        desc: 'A food ordering system that allows users to manage master data such as food categories, food items and offers, view order and user reports in admin portal, whilst also allow users to view details of food categories and food items, search, filter and sort food items, add food items to cart, perform checkout and make payment in user portal.',
        keywords: ['Java', 'Spring Boot', 'JPA', 'Hibernate', 'Angular', 'DevOps', 'Docker', 'Jenkins'],
        repository: 'https://github.com/yokekhei/simplilearn_fsd_projects/tree/master/Capstone/foodBox',
        monthCreated: 3,
        yearCreated: 2021
    }
];

export default portfolios;