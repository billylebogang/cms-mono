
//the user data type to use to tye users
//TODO: define as a interface
export type farmerType = {
    userId: number,
    farmerType: string,
    individualName: string,
    individualOmang: string,
    individualGender: string,
    individualPlaeOfBirth: string,
    individualDateOfBirth: string,
    individualExpiryDate: string,
    companyName: string,
    companyType: string,
    coDirectors: string,
    coOwnership: number,

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
