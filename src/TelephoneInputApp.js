import { LitElement, html, css } from 'lit';

export class TelephoneInputApp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css``;
  }

  constructor() {
    super();
    this.title = 'Telephone Input Tester';
  }

  render() {
    return html`
      <main>
        <p>Telephone tester!</p>
      </main>
    `;
  }
}
