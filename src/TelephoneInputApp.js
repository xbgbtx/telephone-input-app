import { LitElement, html, css } from 'lit';
import 'telephone-input-dropdown';

export class TelephoneInputApp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      submitted_number: { type: String },
    };
  }

  static get styles() {
    return css``;
  }

  constructor() {
    super();
    this.title = 'Telephone Input Tester';
    this.submitted_number = 'No Number Submitted';
  }

  render() {
    return html`
      <main>
        <h1>Telephone Number Input Tester!</h1>
        <form @submit=${this.submit}>
          <label for="telephone-input">Input telephone number:</label>
          <input id="telephone-input" name="telephone-input" type="text" />
          <br /><br />
          <input type="submit" value="Submit" />
        </form>
        <h2>Submitted Number:</h2>
        <p>${this.submitted_number}</p>
        <telephone-input-dropdown></telephone-input-dropdown>
      </main>
    `;
  }

  submit(e) {
    e.preventDefault();
    this.submitted_number =
      this.shadowRoot.getElementById('telephone-input').value;
  }
}
