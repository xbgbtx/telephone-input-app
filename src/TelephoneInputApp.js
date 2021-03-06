import { LitElement, html, css } from 'lit';
import { TelephoneInputDropdown } from 'telephone-input-dropdown';
customElements.define('telephone-input-dropdown', TelephoneInputDropdown);

const backgroundHref = new URL(
  '../assets/Square_Tiles-SLE.png',
  import.meta.url
).href;

export class TelephoneInputApp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      submitted_number: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      main {
        width: 100%;
        height: 100%;
      }

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
      <main style="background-image: url(${backgroundHref})">
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
