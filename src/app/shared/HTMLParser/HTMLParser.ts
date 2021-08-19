class HTMLParser {
  private html: string;

  constructor(html: string) {
    this.html = html;
  }

  getAllProperties(): string[] {
    const regexp = new RegExp('{{(.*?)}}', 'g');
    const array: string[] = [];
    [...this.html.matchAll(regexp)].forEach((item: RegExpMatchArray) => {
      array.push(item.concat()[1]);
    });
    return array;
  }

  changeAllProperties(values: any) {
    const properties = this.getAllProperties();
    properties.forEach((property: string) => {
      if (values[property]) {
        this.changeProperty(property, values[property]);
      } else {
        this.changeProperty(property, '');
      }
    });
  }

  changeProperty(property: string, value: string): void {
    this.html = this.html.replace(`{{${property}}}`, value);
  }

  getHtmlAsHtmlElement(): DocumentFragment {
    const element = document.createElement('template');
    element.innerHTML = this.html;
    return element.content;
  }
}

export default HTMLParser;
