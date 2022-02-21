/* General imports */
import Header from './components/header.js';
import Footer from './components/footer.js';
import { displayProjectsDOM, displayProjectsPage } from './content/projects.js';
import { populateSkills, populateEducation } from './content/about.js';
import { displayEducationDOM } from './content/experience.js';

//TODO: put this inside head later
{
	/* <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/cookieconsent@3.1.1/build/cookieconsent.min.css" />   */
}

/** THINGS TO ADD TO HEAD */
document.getElementsByTagName('head')[0].innerHTML += `
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-GRE6WN1W8Y"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-GRE6WN1W8Y');
</script>
`;

// TODO: fix this cookie popup
// document.body.innerHTML += `
// <script src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js"></script>
//   <script>
//    window.cookieconsent.initialise({
//     container: document.getElementById("content"),
//     palette:{
//      popup: {background: "#fff"},
//      button: {background: "#aa0000"},
//     },
//     revokable:true,
//     onStatusChange: function(status) {
//      console.log(this.hasConsented() ?
//       'enable cookies' : 'disable cookies');
//     },
//     law: {
//      regionalLaw: false,
//     },
//     location: true,
//    });
//   </script>
// `;

const populateDOM = () => {
	displayProjectsDOM();
	populateSkills();
	populateEducation();
	displayEducationDOM();
};

if (document.URL.includes('index')) {
	populateDOM();
} else if (document.URL.includes('projects')) {
	displayProjectsPage();
}

// Scroll animation
$(document).ready(function() {
	// Add smooth scrolling to all links
	$('a').on('click', function(event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== '') {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate(
				{
					scrollTop: $(hash).offset().top
				},
				900,
				function() {
					// Add hash (#) to URL when done scrolling (default click behavior)
					window.location.hash = hash;
				}
			);
		} // End if
	});
});

var scrollToTopBtn = document.querySelector('.scrollToTopBtn');
var rootElement = document.documentElement;

function handleScroll() {
	// Do something on scroll
	var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
	if (rootElement.scrollTop / scrollTotal > 0.1) {
		scrollToTopBtn.classList.add('showBtn');
	} else {
		scrollToTopBtn.classList.remove('showBtn');
	}
}

function scrollToTop() {
	// Scroll to top logic
	rootElement.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
}
scrollToTopBtn.addEventListener('click', scrollToTop);
document.addEventListener('scroll', handleScroll);

AOS.init();

AOS.init({
	offset: 0, // offset (in px) from the original trigger point
	delay: 200, // values from 0 to 3000, with step 50ms
	duration: 900, // values from 0 to 3000, with step 50ms
	easing: 'ease', // default easing for AOS animations
	once: true, // whether animation should happen only once - while scrolling down
	mirror: false // whether elements should animate out while scrolling past them
});

/* Mobile menu */
const mobileMenu = document.querySelector('#mobile-menu-li');
const mobileBtn = document.querySelector('#mobile-btn');

// Click listener hamburger menu btn
mobileBtn.addEventListener('click', () => {
	if (!mobileBtn.classList.contains('is-active')) {
		mobileMenuActive(true);
		mobileMenu.style.display = 'inline-block';

		// Onclick outside hide again
		event.stopPropagation();
		window.onclick = function(e) {
			if (e.target != mobileMenu) {
				mobileMenuActive(false);
				mobileMenu.style.display = 'none';
			} else {
				mobileMenu.style.display = 'inline-block';
			}
		};
	} else {
		mobileMenuActive(false);
		mobileMenu.style.display = 'none';
	}
});

// Toggle source of mobile menu image btn
function mobileMenuActive(active) {
	if (active) {
		mobileBtn.classList.add('is-active');
	} else {
		mobileBtn.classList.remove('is-active');
	}
}
