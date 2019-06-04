export interface Propiedades {
    status: string;
    name: string;
    price: number;
    currency: string;
    createdAt: string;
    user: User;
    operation: Operation;
    propertyAddress: PropertyAddress;
}

interface User {
    name: string,
    lastname: string,
    id : string
}

interface Operation {
    name: string,
    id: string
}

interface PropertyAddress {
    stateId: string,
    stateName: string,
    municipalityName: string,
    settlementName: string,
    postalCode: string,
    street: string,
    outNumber: string
}