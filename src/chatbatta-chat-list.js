window.customElements.define('chatbatta-chat-list', class ChatbattaChatList extends HTMLElement {
  constructor () {
    super(); // always call super() first in ctor.

    this.is = 'chatbatta-chat-list';

    let shadowRoot = this.attachShadow({
      mode: 'open',
    });
    const t = document.createElement('template');
    t.innerHTML = `
      <style>
        @supports not (:host) {
          :root {
            display: block;
            box-sizing: border-box;
            position: relative;
          }
        }
        
        :root,
        :host {
          display: block;
          box-sizing: border-box;
          position: relative;
        }

        * {
          box-sizing: border-box;
        }

        .app-shell-item {
          display: flex;
          flex-direction: row;
          align-items: center;

          position: relative;
          width: 100%;
          // height: 64px;
          padding: 24px 16px;
          margin: 0 0 1px;
          background-color: #fff;
        }

      </style>

      <div class="content-container"></div>
    `;
    const instance = t.content.cloneNode(true);

    shadowRoot.appendChild(instance);
  }

  connectedCallback() {
    console.info(this.is + ' connected.');

    // TODO: Remove dummy data.
    console.time('generate-dummy-chat-list-items');
    this._generateDummyChatListItems();
    console.timeEnd('generate-dummy-chat-list-items');
  }

  disconnectedCallback() {
    
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    
  }

  _generateDummyChatListItems() {
    const dummyData = Array(100).fill(0);
    let innerHTML = [];

    for (let dummyDatum of dummyData) {
      innerHTML.push(
        `<div class="app-shell-item">'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat suscipit sem, et accumsan magna hendrerit ac. Cras in est eros. In suscipit elit id magna pellentesque, sit amet maximus turpis congue.'</div>`
      );
    }

    this._contentContainer.innerHTML = innerHTML.join('\n');

    // Ready to be GC-ed.
    innerHTML = null;
  }

  get _contentContainer() {
    return this.shadowRoot.querySelector('.content-container');
  }

});