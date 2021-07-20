import faker from 'faker'; // для подкоючаемых бибилиотек нужно утанавливаьб файл определения типов (если подчеркивает) -> npm i @types/faker
import {Mappable} from './CustomMap';

export class User implements Mappable {
    phrase: string;
    name: string;
    location: {
        lat: number,
        lng: number,
    };
    color/**:string */ = 'black';

    constructor(){
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        }
    }

    markerContent():string {
        if (this.phrase) {
            return `<h2>${this.name}</h2><h4>${this.phrase}</h4>` ;
        }
        return `<h2>${this.name}</h2>`;
    }

}