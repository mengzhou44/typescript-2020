import { User } from '../models/user';
import { View } from './view';
export class UserForm extends View<User> {
  constructor(parent: Element, model: User) {
    super(parent, model);
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      '.set-age:click': this.onSetAgeClick,
      '.change-name:click': this.onChangeNameClick,
      '.save-user:click': this.onSaveUserClick
    };
  }

  onSetAgeClick = (): void => {
    this.model.set({ age: 10 });
  };

  onChangeNameClick = (): void => {
    const input = this.parent.querySelector('input');
    if (input) {
      this.model.set({ name: input.value });
    }
  };

  onSaveUserClick = (): void => {
    this.model.save();
  };

  template(): string {
    return `
          <input placeholder=${this.model.get('name')} >
          <button class='change-name'> Change Name</button>
          <button class='set-age'>Set Random Age </button>
          <div>
          <button class='save-user'>Save User</button>
          </div>
       `;
  }
}
