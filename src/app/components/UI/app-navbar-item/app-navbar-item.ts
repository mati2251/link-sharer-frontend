import html from './app-navbar-item.html';
import styles from './app-navbar-item.module.scss';
import HTMLParser from '../../../shared/HTMLParser/HTMLParser';

class AppNavbarItem extends HTMLUListElement {
  constructor() {
    super();
    const style = document.createElement('link');
    style.setAttribute('rel', 'stylesheet');
    style.setAttribute('href', styles);
    this.attachShadow({ mode: 'open' });
    const htmlParser = new HTMLParser(html);
    htmlParser.changeValue('href', 'hre');
    this.shadowRoot.append(htmlParser.getHtmlAsHtmlElement(), style);
  }
}

customElements.define('app-navbar-item', AppNavbarItem, { extends: 'ul' });
