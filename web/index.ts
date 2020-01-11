import { User } from './models/user';
import { UserEdit } from './views/user-edit';

const user = User.buildUser({ name: 'meng', age: 46 });
const root = document.getElementById('root');
if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();
}
