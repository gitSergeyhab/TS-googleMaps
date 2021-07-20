import {User} from './User';
import {Company} from './Company';
// import faker from 'faker';

// const user = new User();
// const company = new Company()
// console.log(user, company);

// const newMap = new google.maps.Map(document.querySelector('#map'), {
//     zoom: 2,
//     center: {
//         // lat: 54.1961,
//         // lng: 37.6182,
//         // lat: parseFloat(faker.address.latitude()),
//         // lng: parseFloat(faker.address.longitude()),
//         lat: 0,
//         lng: 0,
//     }
// });

import {CustomMap} from './CustomMap';

const customMap = new CustomMap('#map');
// customMap.addUserMarker(new User);
// customMap.addCompanyMarker(new Company)

customMap.addMarker(new User);
customMap.addMarker(new Company);