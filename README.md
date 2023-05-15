# Library App

The Library App is a React Native application designed to serve as a digital library for managing books. It allows users to keep track of books in their possession, lend books to others, and keep a record of books borrowed from others.

_Note: The application is a work in progress._


# Features

- **Book Management**: Users can add books to their library by providing book details such as title, author, and genre. They can add, view, and search for books from their collection.

- **Lending Books**: Users can track books that they lend to others. They can specify the borrower's name, lend date, and due date so the app can keep a record of lent books.

- **Borrowed Books**: Users can keep track of books they have borrowed from others. They can enter book details and the lender's name.


## Installation

To run the Library App locally, follow these steps:

1. Make sure you have Node.js installed on your machine.

2. Clone the repository:

   ```
   git clone https://github.com/tanja-h/library-app-rn.git
   ```

3. Navigate to the project directory:

   ```
   cd library-app-rn
   ```

4. Install the dependencies:

   ```
   yarn install
   ```

5. Start the app on iOS or Android platform:

   ```
   yarn ios
   ```
   or
   
   ```
   yarn android
   ```

6. Open the app on your device using the simulator or connecting to a real mobile device.

7. Start the server application from [**library-rest-api**](https://github.com/tanja-h/library-rest-api) repository to enable the login (apps are currently connected for the login purposes).


## Dependencies

The Library App relies on the following dependencies:

- React Native: a JavaScript framework for building mobile applications.
- React Navigation: a routing and navigation library for React Native apps.
- React Native Paper: a collection of customizable and production-ready components for React Native.
- React Native vector icons: customizable icons for React Native with support for NavBar/TabBar, image source and full styling.
- ReactNative CLI: a set of tools and services for building, deploying, and managing React Native apps.

For a complete list of dependencies, refer to the `package.json` file.

## Contact

For any questions or inquiries, please contact the project maintainer:

- Email: [tanja.hromin@gmail.com](mailto:tanja.hrominl@gmail.com)
- GitHub: [tanja-h](https://github.com/tanja-h)
