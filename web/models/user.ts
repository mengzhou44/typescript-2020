import { Model } from './model';
import { Attributes } from './attributes';
import { Eventing } from './eventing';
import { ApiSync } from './api-sync';
import { Collection } from './collection';

export class UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
   
    return new User(
      new Eventing(),
      new ApiSync<UserProps>(rootUrl),
      new Attributes<UserProps>(attrs)
    );
  }
  static getAllUsers(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(
      'http://localhost:3000/users',
      props => User.buildUser(props)
    );
  }
}
