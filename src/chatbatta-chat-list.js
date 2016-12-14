window.customElements.define('chatbatta-chat-list', class ChatbattaChatList extends HTMLElement {
  constructor () {
    super(); // always call super() first in ctor.

    let shadowRoot = this.attachShadow({
      mode: 'open',
    });
    const t = document.createElement('template');
    t.innerHTML = `
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          position: relative;
        }

        * {
          box-sizing: border-box;
        }

      </style>

      <div>haha</div>
    `;
    const instance = t.content.cloneNode(true);

    shadowRoot.appendChild(instance);
  }

  createdCallback() {
    console.log(this.localName + ' created');
  }

  connectedCallback() {

  }

  disconnectedCallback() {
    
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    
  }

});