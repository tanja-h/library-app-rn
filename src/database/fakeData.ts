import { Book, ExchangeType, Genre } from "../utils/typeUtils";

const lentBooks: Book[] = [
    {
        title: "Harry Potter and new part",
        author: "Cupcake Honey J.K.Rowling",
        genre: Genre.HISTORICAL,
        coverImage: 'https://picsum.photos/id/874/350',
        pagesCount: 400,
        exchange: {
            user: 'Petar', startDate: new Date(), dueDate: new Date(2, 2, 2023), type: ExchangeType.LENT
        }
    },
    {
        title: "Gummy bear candy cupcake Potter",
        author: "J.K.Rowling",
        genre: Genre.FANTASY,
        coverImage: 'https://picsum.photos/id/872/350',
        pagesCount: 300,
        exchange: {
            user: 'Boris', startDate: new Date(), dueDate: new Date(4, 4, 2023), type: ExchangeType.LENT
        }
    },
    {
        title: "Milk oat ice cream sugar",
        author: "J.K.Rowling cake",
        genre: Genre.FANTASY,
        coverImage: 'https://picsum.photos/id/372/350',
        pagesCount: 180,
        exchange: {
            user: 'Luka', startDate: new Date(), dueDate: new Date(4, 4, 2023), type: ExchangeType.LENT
        }
    },
    {
        title: "Honey cake chocolate part",
        author: "J.K daefesad",
        genre: Genre.DRAMA,
        coverImage: 'https://picsum.photos/id/322/350',
        pagesCount: 200,
        exchange: {
            user: 'Jelena', startDate: new Date(), dueDate: new Date(4, 4, 2023), type: ExchangeType.LENT
        }
    },
    {
        title: "Lorem qwerty dolor sit",
        author: "Cupcake Ipsum ",
        genre: Genre.ROMANCE,
        coverImage: 'https://picsum.photos/id/102/350',
        pagesCount: 450,
        exchange: {
            user: 'Jovana', startDate: new Date(), dueDate: new Date(4, 4, 2023), type: ExchangeType.LENT
        }
    },
]

const borrowedBooks: Book[] = [
    {
        title: "Harry Potter and the Big party",
        author: "J.K.Rowling",
        genre: Genre.FANTASY,
        coverImage: 'https://picsum.photos/id/441/350',
        pagesCount: 400,
        exchange: {
            user: 'Ana', startDate: new Date(), dueDate: new Date(1, 1, 2023), type: ExchangeType.BORROWED
        }
    },
    {
        title: "Harry Potter and the Big party 2",
        author: "J.K.Rowling",
        genre: Genre.FANTASY,
        coverImage: 'https://picsum.photos/id/234/350',
        pagesCount: 400,
        exchange: {
            user: 'Ivana', startDate: new Date(), dueDate: new Date(3, 3, 2023), type: ExchangeType.BORROWED
        }
    },
]

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
    ...lentBooks,
    ...borrowedBooks
];
