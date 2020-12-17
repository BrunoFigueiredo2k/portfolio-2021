export default class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <header>
          <nav class="container">
            <ul class="horizontal-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact" class="cta-btn">Get in contact</a></li>
            </ul>
          </nav>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);