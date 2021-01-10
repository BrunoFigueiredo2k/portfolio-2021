export default class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <footer>
          <div class="container">
            <ul class="horizontal-list footer-socials" style="font-size: 30px;">
                <li><a href="https://www.linkedin.com/in/bruno-figueiredo-953906177/" rel="noreferrer"
                target="_blank"><i class="fab fa-linkedin"></i></a></li>
                <li><a href="https://github.com/BrunoFigueiredo2k" rel="noreferrer" target="_blank"><i
                    class="fab fa-github"></i></a></li>
                <li><a href="mailto:bruno.figueiredoATthestudentbrokerDOTcom" onclick="this.href=this.href
                .replace(/AT/,'@')
                .replace(/DOT/,'.')" class="fas fa-envelope"></a></li>
            </ul>
            <ul class="horizontal-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul><br>
          </div>
        </footer>
        <div class="sub-footer">
            <div class="container">
            <p>Bruno Monteiro Figueiredo | All Rights Reserved</p>
            </div>
        </div>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);