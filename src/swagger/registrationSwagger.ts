
export const getFarmers:any = {
    tags:  ['Farmers'],
    description: 'return a list of all farmer details in the database',
    operationId: 'getFarmers',
    responses:{
        '200':{
            description: 'successfull Json array of farmers',
            'content': {
                'application/json':{
                    schema: {
                        type: 'array',
                        items:{
                            
                            omang:{
                                type: 'number',
                                description: 'unique identify for the user'
                            },
                            firstname:{
                                type: 'string',
                                description: 'name of the user'
                            },
                            middlename:{
                                type: 'string',
                                description: 'unique name  for the user'
                            },
                            lastname:{
                                type: 'number',
                                description: 'for auth'
                            },
                            gender: {
                                type:'string',
                                description: 'gender of the farmer'
                            },
                            dateOfBirth: {
                                type:'number',
                                description: 'date of birth of the farmer'
                            },
                            placeOfBirth: {
                                type:'String',
                                description: 'place of birth of the farmer'
                            },
                            residentPermitNumber: {
                                type:'number',
                                description:'resident permit number for non-citizens'
                            },
                            residentPermitNumberExpiryDate: {
                                type:'number',
                                description:'resident permit date of expiry for non-citizens'
                            }
                    
                            
                        }
                    }
                }
            }
        },
        '400':{
            description: 'error in fetching a list of users',
            'content': {
                'application/json': {
                    schema: {
                        type: 'object',
                        items:{ 
                            results:{
                                type: 'string'
                            }
                        }
                    }
                }
            }
        }
    }
}



export const getFarmer:any = {
    tags:  ['Farmer'],
    description: 'return a information about a farmer',
    operationId: 'getFarmer',
    responses:{
        '200':{
            description: 'successfull Json object of farmer',
            'content': {
                'application/json':{
                    schema: {
                        type: 'object',
                        items:{
                            
                            omang:{
                                type: 'number',
                                description: 'unique identify for the user'
                            },
                            firstname:{
                                type: 'string',
                                description: 'name of the user'
                            },
                            middlename:{
                                type: 'string',
                                description: 'unique name  for the user'
                            },
                            lastname:{
                                type: 'number',
                                description: 'for auth'
                            },
                            gender: {
                                type:'string',
                                description: 'gender of the farmer'
                            },
                            dateOfBirth: {
                                type:'number',
                                description: 'date of birth of the farmer'
                            },
                            placeOfBirth: {
                                type:'String',
                                description: 'place of birth of the farmer'
                            },
                            residentPermitNumber: {
                                type:'number',
                                description:'resident permit number for non-citizens'
                            },
                            residentPermitNumberExpiryDate: {
                                type:'number',
                                description:'resident permit date of expiry for non-citizens'
                            }
                    
                            
                        }
                    }
                }
            }
        },
        '400':{
            description: 'error in fetching a farmer',
            'content': {
                'application/json': {
                    schema: {
                        type: 'object',
                        items:{ 
                            results:{
                                type: 'string'
                            }
                        }
                    }
                }
            }
        }
    }


}


export const createUser:any = {
    tags:  ['farmer'],
    description: 'create a new farmmer profile',
    operationId: 'createFarmer',
    responses:{
        '200':{
            description: 'successfull added a new farmmer profile',
            'content': {
                'application/json':{
                    schema: {
                        type: 'array',
                        items:{
                            
                            userId:{
                            type: 'number',
                            description: 'unique identify for the user'
                            },
                            name:{
                                type: 'string',
                                description: 'name of the user'
                            },
                            username:{
                                type: 'string',
                                description: 'unique name  for the user'
                            },
                            password:{
                                type: 'number',
                                description: 'for auth'
                            }
                    
                            
                        }
                    }
                }
            }
        },
        '400':{
            description: 'error in fetching a list of users',
            'content': {
                'application/json': {
                    schema: {
                        type: 'object',
                        items:{ 
                            results:{
                                type: 'string'
                            }
                        }
                    }
                }
            }
        }
    }


}






