import { Genre } from "../utils/typeUtils";

export interface Book {
    title: string,
    author: string,
    genre: Genre,
    coverImage: string,
    pagesCount: number,
    lent?: BookLent,
    borrowed?: BookBorrowed,
}

export const allBooks: Book[] = [
    { title: "Harry Potter and the Philosopher's Stone", author: "J.K.Rowling", genre: Genre.FANTASY, coverImage: 'https://picsum.photos/id/210/350', pagesCount: 350 },
    { title: "Harry Potter and the Chamber of Secrets", author: "J.K.Rowling", genre: Genre.FANTASY, coverImage: 'https://picsum.photos/id/193/350', pagesCount: 400 },
    { title: "Harry Potter and the Prisoner of Azkaban", author: "J.K.Rowling", genre: Genre.FANTASY, coverImage: 'https://picsum.photos/id/192/350', pagesCount: 400 },
    { title: "Harry Potter and the Goblet of Fire", author: "J.K.Rowling", genre: Genre.FANTASY, coverImage: 'https://picsum.photos/id/407/350', pagesCount: 400 },
    { title: "Harry Potter and the Order of the Phoenix", author: "J.K.Rowling", genre: Genre.FANTASY, coverImage: 'https://picsum.photos/id/441/350', pagesCount: 400 },
    { title: "Harry Potter and the Philosopher's Stone", author: "J.K.Rowling", genre: Genre.FANTASY, coverImage: 'https://picsum.photos/id/210/350', pagesCount: 350 },
    { title: "Harry Potter and the Order of the Phoenix", author: "J.K.Rowling", genre: Genre.FANTASY, coverImage: 'https://picsum.photos/id/441/350', pagesCount: 400 },
    { title: "Harry Potter and the Chamber of Secrets", author: "J.K.Rowling", genre: Genre.FANTASY, coverImage: 'https://picsum.photos/id/193/350', pagesCount: 400 },
    { title: "Harry Potter and the Prisoner of Azkaban", author: "J.K.Rowling", genre: Genre.FANTASY, coverImage: 'https://picsum.photos/id/192/350', pagesCount: 400 },
    {
        title: "Harry Potter and the Big party",
        author: "J.K.Rowling",
        genre: Genre.FANTASY,
        coverImage: 'https://picsum.photos/id/441/350',
        pagesCount: 400,
        borrowed: {
            from: 'Ana', startDate: new Date(), dueDate: new Date(1, 1, 2023)
        }
    },
    {
        title: "Harry Potter and the Big party 2",
        author: "J.K.Rowling",
        genre: Genre.FANTASY,
        coverImage: 'https://picsum.photos/id/234/350',
        pagesCount: 400,
        borrowed: {
            from: 'Ivana', startDate: new Date(), dueDate: new Date(3, 3, 2023)
        }
    },
    {
        title: "Harry Potter and new part",
        author: "J.K.Rowling",
        genre: Genre.FANTASY,
        coverImage: 'https://picsum.photos/id/876/350',
        pagesCount: 400,
        lent: {
            to: 'Petar', startDate: new Date(), dueDate: new Date(2, 2, 2023)
        }
    },
    {
        title: "222222 Harry Potter and new part",
        author: "J.K.Rowling",
        genre: Genre.FANTASY,
        coverImage: 'https://picsum.photos/id/876/350',
        pagesCount: 400,
        lent: {
            to: 'Boris', startDate: new Date(), dueDate: new Date(4, 4, 2023)
        }
    },
];

export interface BookBorrowed {
    from: string;
    startDate: Date;
    dueDate: Date;
}

export interface BookLent {
    to: string;
    startDate: Date;
    dueDate: Date;
}
