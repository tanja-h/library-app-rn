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
    coverImage: string,
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