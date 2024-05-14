import { faker } from '@faker-js/faker';

export class Company {
  comPanyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  }

  constructor() {
    this.comPanyName = faker.company.name()
    this.catchPhrase = faker.company.catchPhrase()
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    } 
  }

  markerContent(): string {
    return `
      <div>
        <h1>ComPany Name: ${this.comPanyName}</h1>
        <h3>Catchphrase: ${this.catchPhrase}</h3>
      </div>
    `
  }
}