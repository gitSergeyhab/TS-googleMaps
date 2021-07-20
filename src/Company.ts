import faker from 'faker';
import {User} from './User'

export class Company extends User {
    phrase: string;
    constructor() {
        super()
        this.name = faker.company.companyName();
        this.phrase = faker.company.catchPhrase();
    }
};