export default class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <header>
          <nav class="container">
            <ul class="horizontal-list">
                <li data-aos="fade-down" data-aos-duration="400"><a href="#home">Home</a></li>
                <li data-aos="fade-down" data-aos-duration="600"><a href="#about">About</a></li>
                <li data-aos="fade-down" data-aos-duration="800"><a href="#projects">Projects</a></li>
                <li data-aos="fade-down" data-aos-duration="1000"><a href="#experience">Experience</a></li>
                <li data-aos="fade-down" data-aos-duration="1200"><a href="#contact" class="cta-btn">Get in contact</a></li>
            </ul>
          </nav>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);