import { LitElement, html, css } from 'lit-element';

const PATTERN = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}/;

class PasswordChecker extends LitElement {
  static get is() {
    return 'password-checker';
  }

  static get properties() {
    return {

    };
  }

  static get styles() {
    return css`

    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`Port your Vanilla + Lit HTML Web Component to a Lit Element one! :)`;
  }
}

customElements.define(PasswordChecker.is, PasswordChecker);