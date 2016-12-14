window.customElements.define('chatbatta-app', class ChatbattaApp extends HTMLElement {
  constructor () {
    super(); // always call super() first in the ctor.

    let shadowRoot = this.attachShadow({
      mode: 'open',
    });
    const t = document.createElement('template');
    t.innerHTML = `
      <style>
        :host {
          display: block;
          position: relative;
          box-sizing: border-box;

          --app-primary-color: #2a56c6;
          --app-secondary-color: #f50057;
        }

        * {
          box-sizing: border-box;
        }

        .app-header {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;

          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 64px;
          padding: 0 16px;
          margin: 0 0 8px;
          background-color: var(--app-primary-color);
          color: #fff;
        }

        .main-title {
          font-size: 20px;
          text-transform: uppercase;
          letter-spacing: 10px;
          font-weight: 500;
          color: #ffc107;
        }

        .content-container {
          position: absolute;
          padding-top: 64px;
          width: 100%;
        }
      </style>

      <div class="app-header">
        <div class="main-title">Chatbatta</div>
      </div>

      <div class="content-container">
        <h1>I Live</h1>
      </div>
    `;
    const instance = t.content.cloneNode(true);

    shadowRoot.appendChild(instance);
  }
});