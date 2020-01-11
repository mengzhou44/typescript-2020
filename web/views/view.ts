interface ModelForView {
  on(eventName: string, callback: () => void): void;
}

export abstract class View<T extends ModelForView> {
  regions: {[key:string]: Element} = {};
  constructor(protected parent: Element, protected model: T) {
    this.bindmodel();
  }

  bindmodel(): void {
    this.model.on('change', () => {
      this.render();
    });
  }
  abstract template(): string;

  regionsMap(): { [key: string]: string } {
    return {};
  }

  eventsMap(): { [key: string]: () => void } {
    return {}
  }


  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();
    for (let eventKey in eventsMap) {
      const [element, event] = eventKey.split(':');
      fragment.querySelectorAll(element).forEach(element => {
        element.addEventListener(event, eventsMap[eventKey]);
      });
    }
  }

mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();

    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector);

      if (element) {
        this.regions[key] = element;
      }
    }
  }

  onRender(): void {
  }

  render(): void {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);

    this.onRender();
    this.parent.append(templateElement.content);
  }
}
