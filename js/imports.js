/* General imports */
import Header from './components/header.js';
import Footer from './components/footer.js';
import displayProjectsDOM from './content/projects.js';
import { populateSkills, populateEducation } from './content/about.js';
import {displayEducationDOM} from './content/experience.js';

const populateDOM = () => {
  displayProjectsDOM();
  populateSkills();
  populateEducation();
  displayEducationDOM();
}

populateDOM();

// Scrollbar indication
window.onscroll = function() {scrollIndicator()};

function scrollIndicator() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// Scroll animation
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});