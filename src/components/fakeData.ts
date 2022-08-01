import { Genre } from "../utils/typeUtils";

interface Book {
    title: string,
    author: string,
    genre: Genre,
    coverImage: string,
    pagesCount: number,
}

export const books: Book[] = [
    { title: "Hari Poter i kamen mudrosti", author: "J.K.Rowling", genre: Genre.FANTASY, coverImage: 'https://picsum.photos/id/210/350', pagesCount: 350 },
    { title: "Hari Poter i dvorana tajni", author: "J.K.Rowling", genre: Genre.FANTASY, coverImage: 'https://picsum.photos/id/193/350', pagesCount: 400 },
];