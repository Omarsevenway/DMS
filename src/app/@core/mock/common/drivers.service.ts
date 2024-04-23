import {Injectable} from "@angular/core";
import {Driver} from "../../interfaces/common";

@Injectable()
export class DriversService {
  constructor() {
  }

  data: Driver[] = [
    {
      name: 'John',
      surname: 'Doe'
    }, {
      name: 'Steve',
      surname: 'Garberg',
    }, {
      name: 'Alex',
      surname: 'Anderson'
    }, {
      name: 'George',
      surname: 'Williams'
    }
    ];

  getDrivers(): Driver[] {
    return this.data;
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  getRandomDriver(): Driver {
    const index = this.getRandomInt(this.data.length);
    return this.data[index];
  }

}
