const CLASS_RIGHT_CONTENT = 'right-content';
const CLASS_LEFT_CONTENT = 'left-content';

// Object of all projects
const projects = [
    {
        id: Math.floor(Math.random() * Date.now()),
        title: 'The Student Broker',
        description: "Website where (international) students can sign up and search for student housing in the Netherlands.",
        technologies: ['Javascript', 'HTML/CSS', 'PHP', 'jQuery', 'Bootstrap'],
        linkGithub: null,
        linkWebsite: 'https://thestudentbroker.com/pages/index.php',
        img: '/images/projects/project-tsb.jpg',
        directionContent: CLASS_RIGHT_CONTENT
    },
    {
        id: Math.floor(Math.random() * Date.now()),
        title: 'KB Creative',
        description: "Webdesign & development agency I'm the owner of together with one other developer.",
        technologies: ['Javascript', 'HTML/CSS'],
        linkGithub: 'https://github.com/BrunoFigueiredo2k/KB-Creative',
        linkWebsite: 'https://thestudentbroker.com/pages/index.php',
        img: '/images/projects/project-kbcreative.jpg',
        directionContent: CLASS_LEFT_CONTENT
    },
    {
        id: Math.floor(Math.random() * Date.now()),
        title: 'URL shortening API',
        description: "Landing page challenge from Frontend Mentor to practice some layouts/SCSS and some Javascript.",
        technologies: ['Javascript', 'HTML/SCSS'],
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

export default displayProjectsDOM;