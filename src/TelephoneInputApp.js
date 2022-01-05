import { LitElement, html, css } from 'lit';
import { TelephoneInputDropdown } from 'telephone-input-dropdown';
customElements.define('telephone-input-dropdown', TelephoneInputDropdown);

export class TelephoneInputApp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      submitted_number: { type: String },
    };
  }

  static get styles() {
    return css`
      #content-div {
        display: inline-block;
        padding: 25px;
        margin: 25px;
        background-color: rgba(20, 20, 20, 0.7);
        color: white;
      }
    `;
  }

  constructor() {
    super();
    this.title = 'Telephone Input Tester';
    this.submitted_number = 'No Number Submitted';
  }

  render() {
    return html`
      <main>
        <div id="content-div">
          <h1>Telephone Number Input Tester!</h1>
          <form @submit=${this.submit}>
            <telephone-input-dropdown
              id="telephone-input"
            ></telephone-input-dropdown>
            <input type="submit" value="Submit" />
          </form>
          <h2>Submitted Number:</h2>
          <p>${this.submitted_number}</p>
        </div>
      </main>
    `;
  }

  submit(e) {
    e.preventDefault();
    this.submitted_number =
      this.shadowRoot.getElementById('telephone-input').value;
  }
}
