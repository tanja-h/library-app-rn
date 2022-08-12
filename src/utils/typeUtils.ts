export type Setter<T> = React.Dispatch<React.SetStateAction<T>>

export enum Genre {
    DRAMA = 'DRAMA',
    ROMANCE = 'ROMANCE',
    FANTASY = 'FANTASY',
    THRILLER = 'THRILLER',
    HISTORICAL = 'HISTORICAL',
}
export interface Book {
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