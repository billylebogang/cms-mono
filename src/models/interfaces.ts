
//the user data type to use to tye users
//TODO: define as a interface
export type userType = {
    id: number,
    name: string,
    email: string,
    password: string,

}


export interface swaggerConfigInterface {
    openapi: string;
    info: {
        title: string;
        version: string;
        description: string;
        termsOfServiceUrl: string;
        contactEmail: {
            name: string;
            email: string;
            url: string;
        };
        license: {
            name: string;
            url: string;
        };
    };
    servers: {
        url: string;
        description: string;
    }[];
    apis: string[];
    tags: {
        name: string;
    }[];
    paths : {
        '/users': {
            get: any;
        }
    };

    
}
