import { swaggerConfigInterface } from '../models/interfaces'
import {getFarmer, getFarmers, getMotswana, postFarmer} from './registrationSwagger'


export const options= {
   
    openapi : '3.0.1',
    info : {
        title: 'Cms mono backend',
        version: '1.0.0',
        description: 'Backend for frontend developers',
        termsOfServiceUrl: '',
        contactEmail: {
            name: 'backend guys',
            email:'backend@cms.com',
            url:'https://cms.com'
        },
        license: {
            name: 'Apache 2.0',
            url:'https://www.apache.org/licenses/LICENSE-2.0.html'
        }
    },
    servers : [
        {
            url: 'http://localhost:3030/',
            description: 'local development server',

        }
        
    ],
    apis: ['./src/swagger.ts'],
    tags:[
        {
            name: 'Farmer'
        },
        {
            name: 'Farmers'
        }
    ],
    paths: {
        '/farmer': {
            'get': getFarmers,
            'post': postFarmer,
            
            
        },
        '/farmer/omang/:omang': {
            'get': getMotswana,

        },
        '/farmers/:id': {
            'get': getFarmer,

    }
}


}