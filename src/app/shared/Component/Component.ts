import HTMLParser from '../HTMLParser/HTMLParser';

abstract class Component extends HTMLElement {
  htmlParser: HTMLParser;

  protected constructor(html = '') {
    super();
    this.htmlParser = new HTMLParser(html);
  }
}

export default Component;
