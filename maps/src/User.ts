import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
  location: {
    lat: number;
    lng: number;
  };
  name: string;
  color: string;

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
    this.color = 'blue';
  }

  markerContent() {
    return `
        <div>
           <h1>User: ${this.name} </h1>
        </div>
    `;
  }
}
