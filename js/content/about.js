const skills = document.getElementById('skills-li');
const education = document.getElementById('education');
const hobbies = document.getElementById('hobbies');

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
        icon: '<i class="fab fa-php"></i>',
        tooltipText: 'PHP'
    },
    {
        icon: '<i class="fab fa-python"></i>',
        tooltipText: 'Python'
    },
]

const populateSkills = () => {
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

export default populateSkills;