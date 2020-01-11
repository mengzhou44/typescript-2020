import { AxiosResponse } from 'axios';
import { Eventing } from './eventing';
import { ApiSync } from './api-sync';
import { Attributes } from './attributes';

interface HasId {
  id?: number;
}

export class Model<T extends HasId> {
  constructor(
    private events: Eventing,
    private sync: ApiSync<T>,
    private attributes: Attributes<T>
  ) {}

  on = this.events.on;
  trigger = this.events.trigger;
  get = this.attributes.get;

  set(update: T) {
    this.attributes.set(update);
    this.trigger('change');
  }

  fetch() {
    const id = this.attributes.get('id');

    if (typeof id !== 'number') {
      throw 'id must be a number';
    }
    this.sync.fetch(id).then((res: AxiosResponse) => {
      this.set(res.data);
    });
  }

  save(): void {
    this.sync.save(this.attributes.getAll()).then((res: AxiosResponse) => {
      console.log('saved!');
    });
  }
}
