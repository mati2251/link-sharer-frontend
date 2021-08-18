class HTMLParser {
  private html: string;

  constructor(html: string) {
    this.html = html;
  }

  // getAllProperties(): string[] {
  //   return [];
  // }

  changeValue(property: string, value: string): void {
    this.html = this.html.replace(`{{${property}}}`, value);
  }

  getHtmlAsHtmlElement(): DocumentFragment {
    const element = document.createElement('template');
    element.innerHTML = this.html;
    console.log(element);
    return element.content;
  }
}

export default HTMLParser;
