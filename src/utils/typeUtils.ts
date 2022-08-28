export type Setter<T> = React.Dispatch<React.SetStateAction<T>>

export enum Genre {
    DRAMA = 'Drama',
    ROMANCE = 'Romance',
    FANTASY = 'Fantasy',
    THRILLER = 'Thriler',
    HISTORICAL = 'Historical',
}

export interface Book {
    id: string,
    title: string,
    author: string,
    genre: Genre,
    cover: string,
    pagesCount: number,
    exchange?: Exchange,
}

export enum ExchangeType {
    LENT = "LENT",
    BORROWED = "BORROWED",
}

export interface Exchange {
    user: string;
    startDate: Date;
    dueDate: Date;
    type: ExchangeType;
}

export interface User {
    name: string,
    email: string,
    password: string,
    photo?: string,
}

export interface LoginUser {
    email: string,
    password: string,
}

export const genres: Genre[] = [
    Genre.FANTASY,
    Genre.DRAMA,
    Genre.ROMANCE,
    Genre.HISTORICAL,
    Genre.THRILLER,
];
