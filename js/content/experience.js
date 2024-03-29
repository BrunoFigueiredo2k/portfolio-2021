import { generateId } from '../content/projects.js';

const experienceData = [
	{
		id: generateId(),
		elemId: 'kingbee-content',
		company: 'Kingbee',
		companyLogoUrl: '/images/kingbee_logo.jpg',
		role: 'Junior Developer',
		date: 'February 2022 - Now (internship)',
		roles: [
			'Conduct academic research on how stakeholders their problems can best be solved through an interactive BI dashboard.',
			'Creating and documenting both the front-end and back-end of the interactive dashboard.',
			'Working together with the team on the main website Folderz.nl. This means fixing bugs, implementing new features and other maintenance tasks.'
		],
		tech: [ 'Vue.js', 'HTML/CSS', 'Twig', 'Symfony', 'MySQL' ]
	},
	{
		id: generateId(),
		elemId: 'codeerschool-content',
		company: 'Hét Codeerbedrijf',
		companyLogoUrl: '/images/codeerbedrijf_logo.jpg',
		role: 'Developer',
		date: 'October 2020 - February 2022',
		roles: [
			'Create front-end and functionality of several different projects based on designs provided (Android & web).',
			'Creating custom fullstack web applications.',
			'IT support, bug fixing and creating Wordpress websites.'
		],
		tech: [ 'Java', 'React', 'PHP', 'Wordpress', 'HTML/CSS', 'Javascript', 'SQL', 'Next.js' ]
	},
	{
		id: generateId(),
		elemId: 'tsb-content',
		company: 'The Student Broker',
		companyLogoUrl: '/images/tsb-logo.png',
		role: 'Front-end Developer',
		date: 'April 2020 - March 2021',
		roles: [
			'Built front-end of the main website where students can sign up and find all information and landlords can get in contact.',
			'Built admin panel where employees can view all necessary information concerning all the data.',
			'Implemented analytics tools such as Google Analytics and Hotjar',
			'Maintaining and improving website based on testing and user feedback by building new features.'
		],
		tech: [ 'HTML/CSS', 'Javascript', 'Javascript', 'jQuery', 'Bootstrap', 'PHP' ]
	},
	{
		id: generateId(),
		elemId: 'gladwell-content',
		company: 'Gladwell Academy',
		companyLogoUrl: '/images/gladwellacademy_logo.jpg',
		role: 'Jr. Webmaster',
		date: 'February - June 2020 (internship)',
		roles: [
			'Maintained 5+ Wordpress websites by building new features, adding content and redesigning parts of the website(s).',
			"Researched what could've been done in order to improve the user experience and conversion rate.",
			'Improved SEO/performance and analysed trends based on data from tools such as Google Analytics and Hotjar to improve the conversion rates.'
		],
		tech: [ 'Wordpress', 'HTML/CSS', 'Javascript', 'Python' ]
	}
];

const displayEducationDOM = () => {
	const contentExperience = document.getElementById('content-experience');

	experienceData.map((item, index) => {
		contentExperience.innerHTML += `
            <div id="${item.elemId}" class="tabcontent-vertical">
                <h4 class="job-title">${item.role}<img loading="lazy" src="${item.companyLogoUrl}" class="img-company-logo"></h4>
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
		if (index == 0) {
			document.getElementById(item.elemId).style.display = 'block';
		}
	});
};

const populateList = (item, type) => {
	let listElement = '';
	switch (type) {
		case 'activities':
			for (let i = 0; i < item.roles.length; i++) {
				listElement += `<li><span>${item.roles[i]}</span></li>`;
			}
			return listElement;
		case 'tech':
			for (let i = 0; i < item.tech.length; i++) {
				listElement += `<li>${item.tech[i]}</li>`;
			}
			return listElement;
		default:
			break;
	}
};

export { displayEducationDOM };
