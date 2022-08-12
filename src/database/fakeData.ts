import { Book, ExchangeType, Genre } from "../utils/typeUtils";

const lentBooks: Book[] = [
    {
        id: "1",
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
        id: "2",
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
        id: "3",
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
        id: "4",
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
        id: "5",
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
        id: "6",
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
        id: "7",
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
    { id: "8", title: "Harry Potter and the Philosopher's Stone", author: "J.K.Rowling", genre: Genre.FANTASY, coverImage: 'https://picsum.photos/id/210/350', pagesCount: 350 },
    { id: "10", title: "Harry Potter and the Chamber of Secrets", author: "J.K.Rowling", genre: Genre.DRAMA, coverImage: 'https://picsum.photos/id/193/350', pagesCount: 400 },
    { id: "11", title: "Harry Potter and the Prisoner of Azkaban", author: "J.K.Rowling", genre: Genre.FANTASY, coverImage: 'https://picsum.photos/id/192/350', pagesCount: 400 },
    { id: "12", title: "Harry Potter and the Goblet of Fire", author: "J.K.Rowling", genre: Genre.FANTASY, coverImage: 'https://picsum.photos/id/407/350', pagesCount: 264 },
    { id: "13", title: "Harry Potter and the Order of the Phoenix", author: "J.K.Rowling", genre: Genre.ROMANCE, coverImage: 'https://picsum.photos/id/441/350', pagesCount: 820 },
    { id: "14", title: "Harry Potter and the Philosopher's Stone", author: "J.K.Rowling", genre: Genre.FANTASY, coverImage: 'https://picsum.photos/id/210/350', pagesCount: 350 },
    { id: "15", title: "Order of the Phoenix", author: "John Doe", genre: Genre.HISTORICAL, coverImage: 'https://picsum.photos/id/441/350', pagesCount: 248 },
    { id: "16", title: "Chamber of Secrets", author: "L.K. Ipsum", genre: Genre.ROMANCE, coverImage: 'https://picsum.photos/id/193/350', pagesCount: 400 },
    { id: "17", title: "Prisoner of Azkaban", author: "Jane Doe Ipsum", genre: Genre.THRILLER, coverImage: 'https://picsum.photos/id/192/350', pagesCount: 360 },
    ...lentBooks,
    ...borrowedBooks
];
