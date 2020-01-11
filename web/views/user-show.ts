import { User } from '../models/user';
import { View } from './view';


export class UserShow extends View<User> {
  constructor(parent: Element, model: User) {
    super(parent, model);
  }


  template(): string {
    return `
          <div>
          <h3>User Details </h3>
          <div>User Name: ${this.model.get("name")}</div>
          <div>User Age: ${this.model.get("age")}</div>
          </div>
       `;
  }
}
