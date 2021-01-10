import {generateId} from '../content/projects.js'

const experienceData = [
    {
        id: generateId(),
        company: "De Codeerschool",
        role: "Front-end Developer",
        date: "October 2020 - Now",
        roles: [
            "Create front-end of several different projects based on designs provided.",
            "Working with several different technologies depending on the project."
        ],
        tech: [
            "Java",
            "XML",
            "Android Studio",
            "Adobe Xd"
        ]
    },
    {
        id: generateId(),
        company: "KB Creative",
        role: "Owner",
        date: "October 2020 - Now",
        roles: [
            "Create front-end of several different projects based on designs provided.",
            "Working with several different technologies depending on the project."
        ],
        tech: [
            "HTML",
            "SCSS",
            "Javascript"
        ]
    },
    {
        id: generateId(),
        company: "The Student Broker",
        role: "Front-end Developer",
        date: "April 2020 - Now",
        roles: [
            "Create front-end of several different projects based on designs provided.",
            "Working with several different technologies depending on the project."
        ],
        tech: [
            "HTML",
            "CSS",
            "Javascript",
            "jQuery",
            "Bootstrap",
            "PHP"
        ]
    },
    {
        id: generateId(),
        company: "Gladwell Academy",
        role: "Jr. Webmaster",
        date: "February - June 2020",
        roles: [
            "Create front-end of several different projects based on designs provided.",
            "Working with several different technologies depending on the project."
        ],
        tech: [
            "Wordpress",
            "HTML",
            "CSS",
            "Python"
        ]
    }
]

const displayEducationDOM = () => {
    const contentExperience = document.getElementById("content-experience");

    experienceData.map(item => {
        contentExperience.innerHTML += `
        <h4 class="job-title">${item.company}</h4>
        <p class="job-date">${item.date}</p>
        <ul class="job-activities" id="activities-${item.id}">
            ${populateList('activities')}
        </ul>
        <h6 class="job-tech">Used technologies:</h6>
        <ul class="horizontal-list">
            ${populateList('tech')}
        </ul>
    `
    })

}

const populateList = (type) => {
    for (let i = 0; i < experienceData.length; i++){
        switch (type){
            case 'activities':
                for (let j = 0; j < experienceData[i].roles.length; j++){
                    console.log(j)
                    console.log(experienceData[i].roles[j])
                    return `<li>${experienceData[i].roles[j]}</li>`;
                }
            case 'tech':
                return `<li>${experienceData[i].tech[i]}</li>`;
        }
        // let activiesList = document.getElementById(`activities-${experienceData[i].id}`)
    }
}

export {displayEducationDOM};