let skillsData = [
    {
        frontend: [
            {
                icon: '<i class="fab fa-html5"></i>',
                tooltipText: 'HTML'
            },
            {
                icon: '<i class="fab fa-css3-alt"></i>',
                tooltipText: 'CSS'
            },
            {
                icon: '<i class="fab fa-sass"></i>',
                tooltipText: 'SCSS'
            },
            {
                icon: '<i class="fab fa-js-square"></i>',
                tooltipText: 'JavaScript'
            },
            {
                icon: '<i class="fab fa-react"></i>',
                tooltipText: 'React'
            },
            {
                icon: '<img src="https://img.icons8.com/ios-filled/2x/jquery.png" alt="jquery" class="icon-skill-img"/>',
                tooltipText: 'jQuery'
            },
            {
                icon: '<img src="../../images/bootstrap-fill.svg" alt="bootstrap" class="icon-skill-img"/>',
                tooltipText: 'Bootstrap'
            },
        ]
    },
    {
        backend: [
            {
                icon: '<i class="fab fa-php"></i>',
                tooltipText: 'PHP'
            },
            {
                icon: '<img src="https://www.flaticon.com/svg/static/icons/svg/29/29165.svg" alt="SQL" class="icon-skill-img"/>',
                tooltipText: 'SQL'
            },
            {
                icon: '<img src="http://bruno-figueiredo.nl/img/icons-light-theme/mysql.png" alt="MySQL" class="icon-skill-img"/>',
                tooltipText: 'MySQL'
            },
        ]
    },
    {
        other: [
            {
                icon: '<i class="fab fa-wordpress"></i>',
                tooltipText: 'Wordpress'
            },
            {
                icon: '<i class="fab fa-python"></i>',
                tooltipText: 'Python'
            },
            {
                icon: '<img src="http://bruno-figueiredo.nl/img/icons-light-theme/java.png" alt="Java" class="icon-skill-img"/>',
                tooltipText: 'Java'
            },
            {
                icon: '<img src="http://bruno-figueiredo.nl/img/icons-light-theme/kotlin.png" alt="Kotlin" class="icon-skill-img"/>',
                tooltipText: 'Kotlin'
            },
            {
                icon: '<i class="fab fa-android"></i>',
                tooltipText: 'Android Studio'
            },
            {
                icon: '<img src="http://bruno-figueiredo.nl/img/icons-light-theme/scrum.png" alt="Scrum" class="icon-skill-img"/>',
                tooltipText: 'Scrum'
            },
            {
                icon: '<img src="http://bruno-figueiredo.nl/img/icons-light-theme/vscode.png" alt="vscode" class="icon-skill-img"/>',
                tooltipText: 'VS Code'
            },
            {
                icon: '<i class="fab fa-git-square"></i>',
                tooltipText: 'Git'
            }
        ]
    }
];

let educationData = [
    {
        year: '2018 - now',
        school: 'Hogeschool van Amsterdam - Business IT & Management',
        description: "At the HvA I'm currently in my third year of my bachelors for the study Business IT & Management. Although this study focusses more on business processes rather than software development, it was still the reason I developed an interest in (software) development.",
    },
    {
        year: '2012 - 2018',
        school: 'Scholen Gemeenschap Reigersbos - HAVO',
        description: 'At this secondary school I earned my HAVO diploma and FCE certificate while doing the English bilingual trajectory during the first three years.',
    }
]

const populateEducation = () => {
    const education = document.getElementById('timeline');

    for (const key in educationData){
        if (educationData.hasOwnProperty(key)) {
            const element = educationData[key];
            education.innerHTML += `
                <div class="timeline-block timeline-block-right">
                    <div class="marker"></div>
                    <div class="timeline-content">
                        <h3>${element.year}</h3>
                        <span>${element.school}</span>
                        <p>${element.description}</p>
                    </div>
                </div>
            `;
          }
    }
}

const populateSkill = (tab, icon, tooltipText) => {
    tab.innerHTML += `
        <li>
            <div class="tooltip">${icon}
                <span class="tooltiptext">${tooltipText}</span>
            </div>
        </li>`;
}

const populateSkillTab = (array, type) => {
    const skillsFrontend = document.getElementById('skills-li-frontend');
    const skillsBackend = document.getElementById('skills-li-backend');
    const skillsOther = document.getElementById('skills-li-other');

    let i;
    for (i = 0; i < array.length; i++){
        console.log(array)
        switch (type){
            case 'FRONTEND':
                populateSkill(skillsFrontend, array[i].icon, array[i].tooltipText);
                break;
            case 'BACKEND':
                populateSkill(skillsBackend, array[i].icon, array[i].tooltipText);
                break;
            case 'OTHER':
                populateSkill(skillsOther, array[i].icon, array[i].tooltipText);
                break;
        }
    }
}

const populateSkills = () => {
    let i;
    populateSkillTab(skillsData[0].frontend, 'FRONTEND')
    populateSkillTab(skillsData[1].backend, 'BACKEND')
    populateSkillTab(skillsData[2].other, 'OTHER')
}

export { populateSkills, populateEducation };