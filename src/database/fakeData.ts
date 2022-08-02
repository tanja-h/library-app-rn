import { Genre } from "../utils/typeUtils";

export interface Book {
    title: string,
    author: string,
    genre: Genre,
    coverImage: string,
    pagesCount: number,
}

export const books: Book[] = [
    { title: "Harry Potter and the Philosopher's Stone", author: "J.K.Rowling", genre: Genre.FANTASY, coverImage: 'https://picsum.photos/id/210/350', pagesCount: 350 },
    { title: "Harry Potter and the Chamber of Secrets", author: "J.K.Rowling", genre: Genre.FANTASY, coverImage: 'https://picsum.photos/id/193/350', pagesCount: 400 },
    { title: "Harry Potter and the Prisoner of Azkaban", author: "J.K.Rowling", genre: Genre.FANTASY, coverImage: 'https://picsum.photos/id/192/350', pagesCount: 400 },
    { title: "Harry Potter and the Goblet of Fire", author: "J.K.Rowling", genre: Genre.FANTASY, coverImage: 'https://picsum.photos/id/407/350', pagesCount: 400 },
    { title: "Harry Potter and the Order of the Phoenix", author: "J.K.Rowling", genre: Genre.FANTASY, coverImage: 'https://picsum.photos/id/441/350', pagesCount: 400 },
    { title: "Harry Potter and the Philosopher's Stone", author: "J.K.Rowling", genre: Genre.FANTASY, coverImage: 'https://picsum.photos/id/210/350', pagesCount: 350 },
    { title: "Harry Potter and the Order of the Phoenix", author: "J.K.Rowling", genre: Genre.FANTASY, coverImage: 'https://picsum.photos/id/441/350', pagesCount: 400 },
    { title: "Harry Potter and the Chamber of Secrets", author: "J.K.Rowling", genre: Genre.FANTASY, coverImage: 'https://picsum.photos/id/193/350', pagesCount: 400 },
    { title: "Harry Potter and the Prisoner of Azkaban", author: "J.K.Rowling", genre: Genre.FANTASY, coverImage: 'https://picsum.photos/id/192/350', pagesCount: 400 },
    { title: "Harry Potter and the Order of the Phoenix", author: "J.K.Rowling", genre: Genre.FANTASY, coverImage: 'https://picsum.photos/id/441/350', pagesCount: 400 },
];