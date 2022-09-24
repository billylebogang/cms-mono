"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
exports.getUsers = {
    tags: ['Users'],
    description: 'return a list of all user in the database',
    operationId: 'getUsers',
    responses: {
        '200': {
            description: 'successfull Json array of users',
            'content': {
                'application/json': {
                    schema: {
                        type: 'array',
                        items: {
                            "user": {
                                id: {
                                    type: 'number',
                                    description: 'unique identify for the user'
                                },
                                name: {
                                    type: 'string',
                                    description: 'name of the user'
                                },
                                username: {
                                    type: 'string',
                                    description: 'unique name  for the user'
                                },
                                password: {
                                    type: 'number',
                                    description: 'for auth'
                                }
                            }
                        }
                    }
                }
            }
        },
        '400': {
            description: 'error in fetching a list of users',
            'content': {
                'application/json': {
                    schema: {
                        type: 'object',
                        items: {
                            results: {
                                type: 'string'
                            }
                        }
                    }
                }
            }
        }
    }
};
