const CLASS_RIGHT_CONTENT = 'right-content';
const CLASS_LEFT_CONTENT = 'left-content';

export const generateId = () => {
    return Math.floor(Math.random() * Date.now())
}

// Projects data
const projects = [
    {
        id: generateId(),
        title: 'The Student Broker',
        description: "Website where (international) students can sign up and search for student housing in the Netherlands. The website contains all information students and landlords need to know about our service.",
        technologies: ['Javascript', 'HTML/CSS', 'PHP', 'jQuery', 'Bootstrap'],
        linkGithub: null,
        linkWebsite: 'https://thestudentbroker.com/pages/index.php',
        img: '/images/projects/project-tsb.jpg',
        directionContent: CLASS_RIGHT_CONTENT
    },
    {
        id: generateId(),
        title: 'KB Creative',
        description: "Webdesign & development agency I'm the co-owner of. At KB Creative I'm a front-end developer working closely together with another back-end developer building fullstack web applications",
        technologies: ['Javascript', 'HTML/CSS'],
        linkGithub: 'https://github.com/BrunoFigueiredo2k/KB-Creative',
        linkWebsite: 'https://thestudentbroker.com/pages/index.php',
        img: '/images/projects/project-kbcreative.jpg',
        directionContent: CLASS_LEFT_CONTENT
    },
    {
        id: generateId(),
        title: 'URL shortener',
        description: "Landing page where you can shorten long urls. This is a challenge from Frontend Mentor to practice some layouts/SCSS and some Javascript.",
        technologies: ['Javascript', 'HTML/SCSS', 'API'],
        linkGithub: 'https://github.com/BrunoFigueiredo2k/url-shortening-api',
        linkWebsite: 'https://url-shortening-api-sepia.vercel.app/',
        img: '/images/projects/url-shortening-api.jpg',
        directionContent: CLASS_RIGHT_CONTENT
    }
]

const displayProjectsDOM = () => {
    // Get element
    const container = document.getElementById('projects-container');

    for (var property in projects) {
        if (projects.hasOwnProperty(property)) {
            const element = projects[property];

            const columnImg = `
                <div class="col">
                    <a href="${element.linkWebsite}"><img src="${element.img}" alt="${element.title}" class="project-img"></a>
                </div>
            `;

            const columnContent = `
                <div class="col project-content ${element.directionContent}">
                    <h3 class="project-title">${element.title}</h3>
                    <div class="project-card">
                        <p class="project-description">${element.description}</p>
                    </div>
                    <ul class="horizontal-list project-tech" id="project-tech-${element.id}"></ul>
                    <ul class="horizontal-list project-links">
                        <li id="link-github-${element.id}"><a href="${element.linkGithub}" target="_blank"
                                rel="noreferrer"><i class="fab fa-github"></i></a></li>
                        <li><a href="${element.linkWebsite}" target="_blank"
                                rel="noreferrer"><i class="fas fa-external-link-alt"></i></a></li>
                    </ul>
                </div>
            `;

            // Determine direction of content (lef or right) based on class of element
            if (element.directionContent == CLASS_RIGHT_CONTENT){
                container.innerHTML += `
                    <div class="row project">
                        ${columnImg}
                        ${columnContent}
                    </div>
                `;
            } else {
                container.innerHTML += `
                <div class="row project">
                    ${columnContent}
                    ${columnImg}
                </div>
            `;
            }

            // Populate list of tech
            const techList = document.getElementById(`project-tech-${element.id}`);
            element.technologies.forEach(element => {
                techList.innerHTML += `<li>${element}</li>`;
            });

            // Hide github icon if there is no public repo (null)
            const linkGithub = document.getElementById(`link-github-${element.id}`);
            if (element.linkGithub == null){ linkGithub.style.display = 'none'}
            
        }
    }
}

/** PROJECTS PAGE */
const projectsAll = [
    {
        title: "Men Spa / Barbershop",
        description: "Male barbershop/spa that displays the shop's information about service and costs.",
        img: "http://bruno-figueiredo.nl/img/projects/project1.jpg",
        linkWebsite: "http://bruno-figueiredo.nl/Portfolio/Men%20Spa/index.html"
    },
    {
        title: "Easybank",
        description: "Simple landing page challenge from Frontend Mentor to practice some layouts and SCSS.",
        img: "http://bruno-figueiredo.nl/img/projects/easybank-landing-page.jpg",
        linkWebsite: "https://easybank-landing-page.brunofigueiredo2k.vercel.app/"
    },
    {
        title: "Coffee Shop",
        description: "Simple landing page challenge from Frontend Mentor to practice some layouts and SCSS.",
        img: "http://bruno-figueiredo.nl/img/projects/project-coffee.jpg",
        linkWebsite: "http://bruno-figueiredo.nl/Portfolio/coffee-landing-page/index.html"
    }
]

const displayProjectsPage = () => {
    // Push data from home page projects to this array of all projects
    projects.map(project => { projectsAll.push(project) })
    
    const row = document.getElementById('projects-row');
    // Get projects and populate DOM of all projects
    projectsAll.map(project => {
        row.innerHTML += `
        <div class="project col-4">
            <div class="content">
                <img src="${project.img}"/>
                <div class="bottom">
                    <h2 class="title">${project.title} <a href="${project.linkWebsite}" target="_blank" rel="noreferrer">
                        <i class="fas fa-external-link-alt sm-icon"></i></a></h2>
                    <p class="description">${project.description.slice(0, 65) + "..."}</p>
                </div>
            </div>
        </div>
        `;
    })
}

export {displayProjectsDOM, displayProjectsPage};