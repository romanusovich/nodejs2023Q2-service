import { randomUUID } from "crypto";

export class User {
  id: string; // uuid v4
  login: string;
  password: string;
  version: number; // integer number, increments on update
  createdAt: number; // timestamp of creation
  updatedAt: number; // timestamp of last update

  constructor(_login: string, _password: string) {
    this.id = randomUUID();
    this.login = _login;
    this.password = _password;
    this.version = 1;
    this.createdAt = Date.now();
    this.updatedAt = Date.now();
  }
}
