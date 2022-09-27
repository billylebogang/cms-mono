
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



export const postFarmer:any = {
    tags:  ['Farmers'],
    description: 'Add a farmer of database',
    operationId: 'postFarmers',
    responses:{
        '200':{
            description: 'successfull added farmers',
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


export const getMotswana:any = {
    tags:  ['motswana'],
    description: 'create a new Motswana profile from NIS',
    operationId: 'getMotswana',
    responses:{
        '200':{
            description: 'successfull retrieve details of Motswana/citizen profile',
            'content': {
                'application/json':{
                    schema: {
                        type: 'object',
                        items:{
                            
                            omang:{
                            type: 'number',
                            description: 'unique identify id for the Motswana/citizen '
                            },
                            firstname:{
                                type: 'string',
                                description: 'firstname of the Motswana/citizen'
                            },
                            surname:{
                                type: 'string',
                                description: 'surname for the motswana/citizen'
                            },
                            DOB:{
                                type: 'date',
                                description: 'data of birth for motswana/citizen'
                            },
                            gender: {
                                type:'string',
                                description: 'gender of the motswana/citizen'
                            },
                            email: {
                                type:'string',
                                description: 'email of the motswana/citizen'
                            },
                            cell_number: {
                                type:'string',
                                description: 'cell number of the motswana/citizen'
                            },
                            omang_exp_date: {
                                type:'string',
                                description: 'expiry data for motswana omang'
                            }
                            ,
                            middleName: {
                                type:'string',
                                description:'middle name of the motswana/citizen'
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






