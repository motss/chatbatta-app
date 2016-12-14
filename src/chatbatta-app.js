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

        .app-shell-header {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;

          position: relative;
          width: 100%;
          height: 64px;
          padding: 0 16px;
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

        .app-shell-layout {
          position: relative;
          width: 100%;
        }
      </style>

      <div class="app-shell-header">
        <div class="main-title">Chatbatta</div>
      </div>

      <div class="app-shell-layout">
        <h1>I Live</h1>
      </div>
    `;
    const instance = t.content.cloneNode(true);

    shadowRoot.appendChild(instance);
  }

  createdCallback() {

  }

  connectedCallback() {
    window.customElements.whenDefined('chatbatta-app')
      .then(() => {
        console.log(this.localName + ' attached!');

        var s = document.createElement('script');
        s.defer = true;
        s.src = '/src/chatbatta-chat-list.js';
        document.head.appendChild(s);
        s.onload = () => {
          var el = document.createElement('chatbatta-chat-list');
          this.shadowRoot.appendChild(el);
        };
      });
  }

  disconnectedCallback() {

  }

  attributeChangedCallback(attrName, oldVal, newVal) {

  }

});