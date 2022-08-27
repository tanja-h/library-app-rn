import React, { useState } from "react";
import { StyleSheet, SafeAreaView, StatusBar, ScrollView } from "react-native";
import { SearchGallery } from "./SearchGallery";
import { allBooks } from "../../database/booksData";
import { Color } from "../../styles/Colors";
import { horizontalPadding } from "../../styles/constants";
import { Genre } from "../../utils/typeUtils";
import { NavigationOnly } from "../../utils/navigationTypeUtils";
import { TextInput } from "react-native-paper";

function getBooks(genre: Genre) {
    return allBooks.filter(book => book.genre === genre);
}

const categories = [
    { genre: Genre.FANTASY, books: getBooks(Genre.FANTASY) },
    { genre: Genre.DRAMA, books: getBooks(Genre.DRAMA) },
    { genre: Genre.ROMANCE, books: getBooks(Genre.ROMANCE) },
    { genre: Genre.HISTORICAL, books: getBooks(Genre.HISTORICAL) },
    { genre: Genre.THRILLER, books: getBooks(Genre.THRILLER) },
];

export const SearchPage = ({ navigation }: NavigationOnly) => {
    const [criteria, setCriteria] = useState('');
    const [categories1,] = useState(categories);

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
                {categories1.map(({ genre, books }) => {
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
