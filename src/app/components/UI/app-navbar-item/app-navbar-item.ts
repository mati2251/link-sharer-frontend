// import styles from '';
// eslint-disable-next-line import/no-unresolved,import/no-webpack-loader-syntax
import styles from './app-navbar-item.module.scss';

// import './app-navbar-item.module.scss';

class AppNavbarItem extends HTMLUListElement {
  constructor() {
    super();
    const label = this.innerHTML;
    const style = document.createElement('link');
    style.setAttribute('rel', 'stylesheet');
    style.setAttribute('href', styles);
    this.attachShadow({ mode: 'open' });
    const ul = document.createElement('h3');
    ul.textContent = label;
    console.log(styles.toString());
    this.shadowRoot.append(ul, style);
  }
}

customElements.define('app-navbar-item', AppNavbarItem, { extends: 'ul' });
