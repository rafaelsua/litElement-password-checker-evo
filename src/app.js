import { LitElement, html, css } from 'lit-element';

import './password-checker';

class NextApp extends LitElement {
  static get properties() {
    return {

    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <password-checker>
      </password-checker>
    `;
  }
  
}

customElements.define('next-app', NextApp);

