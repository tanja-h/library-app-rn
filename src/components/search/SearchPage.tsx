import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, StatusBar, ScrollView } from "react-native";
import { SearchGallery } from "./SearchGallery";
import { allBooks } from "../../database/booksData";
import { Color } from "../../styles/Colors";
import { horizontalPadding } from "../../styles/constants";
import { Book, Genre } from "../../utils/typeUtils";
import { NavigationOnly } from "../../utils/navigationTypeUtils";
import { TextInput } from "react-native-paper";

interface BookCategory {
    genre: Genre,
    books: Book[],
}

const genres: Genre[] = [
    Genre.FANTASY,
    Genre.DRAMA,
    Genre.ROMANCE,
    Genre.HISTORICAL,
    Genre.THRILLER,
];

const getCategories = (allBooks: Book[]): BookCategory[] => {
    const categories: BookCategory[] = [];
    genres.forEach(genre => {
        const c = { genre, books: allBooks.filter(book => book.genre === genre) };
        categories.push(c)
    })

    return categories;
}

export const SearchPage = ({ navigation }: NavigationOnly) => {
    const [criteria, setCriteria] = useState('');
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        setBooks(allBooks);
    }, [allBooks])

    const categories = getCategories(books);

    return (
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar barStyle='dark-content' />

            <TextInput
                value={criteria}
                onChangeText={setCriteria}
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                placeholder='Enter search criteria here ✏️'
                placeholderTextColor={Color.SALMON_DARK}
                underlineColor={Color.SALMON_DARK}
                activeUnderlineColor={Color.SALMON_DARK}
                inlineImageLeft={criteria}
            />
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
            >
                {categories.map(({ genre, books }) => {
                    const booksToDisplay = criteria ? books.filter(books => books.title.toLowerCase().includes(criteria.toLowerCase())) : books;

                    return (
                        booksToDisplay.length > 0 ?
                            <SearchGallery books={booksToDisplay} title={genre} navigation={navigation} key={genre} />
                            : null
                    )
                }
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: Color.SALMON,
    },
    contentContainer: {
        paddingBottom: 32,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        marginTop: 16,
        letterSpacing: 1,
    },
    input: {
        backgroundColor: Color.SALMON_LIGHT,
        height: 40,
        paddingHorizontal: horizontalPadding
    }
});
