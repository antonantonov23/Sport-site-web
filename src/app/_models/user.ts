export class User {
  id: number;
  name: string;
  password: string;
  isAdmin: boolean;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

