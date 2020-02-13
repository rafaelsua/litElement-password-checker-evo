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
    this.password = this.getAttribute('password');
  }

  set password(value) {
    console.log("set password: "+value);
    this._password = value;
    this.setAttribute('password', value);
  }
  
  isValid(passwd) {
    const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}/;
    let isOk = re.test(passwd);
    console.log("Pass: "+passwd);
    console.log("isOk: "+isOk);
    this.password = passwd;
    return re.test(isOk);
  }

  render() {
    //return html`Port your Vanilla + Lit HTML Web Component to a Lit Element one! :)`;
    console.log("render");
    return html`
      <span>Your password is <strong>${this.isValid(this.password) ? 'valid 👍' : 'INVALID 👎'}</strong></span>
      ${this.isValid(this.password) ?
        html`<div>Strength: <progress value=${this.password.length-3} max="5"</progress></div>` : ``}`;
  }
}

customElements.define(PasswordChecker.is, PasswordChecker);