import { CustomMap } from './CustomMap'
import { User } from './User'
import { Company } from './Company'

const map = new CustomMap('id')

const user = new User()
console.log('user: ', user);

const company = new Company()
console.log('company: ', company);

map.addMarker(user)
map.addMarker(company)
