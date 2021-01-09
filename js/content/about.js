let skillsData = [
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
        icon: '<i class="fab fa-php"></i>',
        tooltipText: 'PHP'
    },
    {
        icon: '<i class="fab fa-python"></i>',
        tooltipText: 'Python'
    },
]

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

const populateSkills = () => {
    const skills = document.getElementById('skills-li');

    for (const key in skillsData){
        if (skillsData.hasOwnProperty(key)) {
            const element = skillsData[key];
            skills.innerHTML += `
                <li>
                    <div class="tooltip">${element.icon}
                        <span class="tooltiptext">${element.tooltipText}</span>
                    </div>
                </li>
            `;
          }
    }
}

export { populateSkills, populateEducation };