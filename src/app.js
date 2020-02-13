import { LitElement, html, css } from 'lit-element';

import './password-checker';

class NextApp extends LitElement {
  static get properties() {
    return {
      password: {type: String, attribute: 'password', reflect: true}
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`

      <label for="pass">Password<label/>
      <input type="password" @input=${e => this.isValid(e.target.value)} id="pass"/><br/>

      <password-checker .password="this.password">
      </password-checker>
    `;
  }
  
}

customElements.define('next-app', NextApp);

