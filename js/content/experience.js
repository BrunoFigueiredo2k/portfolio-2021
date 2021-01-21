import {generateId} from '../content/projects.js'

const experienceData = [
    {
        id: generateId(),
        elemId: "codeerschool-content",
        company: "De Codeerschool",
        role: "Front-end Developer",
        date: "October 2020 - Now",
        roles: [
            "Create front-end and functionality of several different projects based on designs provided.",
            "Working with several different technologies depending on the project.",
            "Think about design choices and create new designs if necessary (UI/UX)."
        ],
        tech: [
            "Java",
            "XML",
            "Android Studio",
            "Adobe Xd"
        ],
        defaultOpen: true
    },
    {
        id: generateId(),
        elemId: "kbcreative-content",
        company: "KB Creative",
        role: "Owner",
        date: "October 2020 - Now",
        roles: [
            "Take on several different web development projects by creating webshops, SaaS apps and static websites.",
            "Handle communication with clients and other partners we work together with."
        ],
        tech: [
            "HTML",
            "SCSS",
            "Javascript"
        ],
        defaultOpen: false
    },
    {
        id: generateId(),
        elemId: "tsb-content",
        company: "The Student Broker",
        role: "Front-end Developer",
        date: "April 2020 - Now",
        roles: [
            "Built front-end of the main website where students can sign up and find all information and landlords can get in contact.",
            "Built admin panel where employees can view all necessary information concerning all the data.",
            "Implemented analytics tools such as Google Analytics, Hotjar and Facebook pixel.",
            "Maintaining and improving website based on testing and user feedback by building new features."
        ],
        tech: [
            "HTML",
            "CSS",
            "Javascript",
            "jQuery",
            "Bootstrap",
            "PHP"
        ],
        defaultOpen: false
    },
    {
        id: generateId(),
        elemId: "gladwell-content",
        company: "Gladwell Academy",
        role: "Jr. Webmaster",
        date: "February - June 2020",
        roles: [
            "Maintained 5+ Wordpress websites by building new features, adding content and redesigning parts of the website(s).",
            "Researched what could've been done in order to improve the user experience and conversion rate.",
            "Improved SEO/performance and analysed trends based on data from tools such as Google Analytics and Hotjar to improve the conversion rates."
        ],
        tech: [
            "Wordpress",
            "HTML",
            "CSS",
            "Python"
        ],
        defaultOpen: false
    }
]

const displayEducationDOM = () => {
    const contentExperience = document.getElementById("content-experience");

    experienceData.map(item => {
        contentExperience.innerHTML += `
            <div id="${item.elemId}" class="tabcontent-vertical">
                <h4 class="job-title">${item.role}</h4>
                <p class="job-date">${item.date}</p>
                <ul class="job-activities">
                    ${populateList(item, 'activities')}
                </ul>
                <h6 class="job-tech">Used technologies:</h6>
                <ul class="horizontal-list">
                    ${populateList(item, 'tech')}
                </ul>
            </div>
        `;

        // If property item default open is true then display that tab, the rest is hidden at first
        if (item.defaultOpen) { document.getElementById(item.elemId).style.display = "block"; }
    })

}

const populateList = (item, type) => {
    let listElement = "";
    switch (type){
        case 'activities':
            for (let i = 0; i < item.roles.length; i++){
                listElement += `<li><span>${item.roles[i]}</span></li>`;
            }
            return listElement;
        case 'tech':
            for (let i = 0; i < item.tech.length; i++){
                listElement += `<li>${item.tech[i]}</li>`;
            }
            return listElement;
        default:
            break;
    }
}

export {displayEducationDOM};