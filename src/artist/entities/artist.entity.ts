import { randomUUID } from 'crypto';

export class Artist {
  id: string; // uuid v4
  name: string;
  grammy: boolean;

  constructor(_name: string, _grammy: boolean) {
    this.id = randomUUID();
    this.name = _name;
    this.grammy = _grammy;
  }
}
