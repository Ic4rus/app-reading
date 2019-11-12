export interface IBook {
    id?: number;
    name?: string;
    description?: string;
    imageURL?: string;
}

export class Book implements IBook {
    constructor(public id?: number, public name?: string, public description?: string, public imageURL?: string) {}
}
