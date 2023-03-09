import { Personne } from './personne';
import { Role } from './role';

export class Utilisateur extends Personne {
  username!: string;
  password!: string;

  role!: Role;

  constructor(username?: string, password?: string, role?: Role) {
    super();

    if (username) this.username = username;
    if (password) this.password = password;
    if (role) this.role = role;
  }
}
