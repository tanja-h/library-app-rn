import React from "react";
import { StyleSheet, SafeAreaView, StatusBar, ScrollView } from "react-native";
import { SearchGallery } from "./SearchGallery";
import { allBooks } from "../../database/fakeData";
import { Color } from "../../styles/Colors";
import { Genre } from "../../utils/typeUtils";
import { NavigationOnly } from "../../utils/navigationTypeUtils";

function getBooks(genre: Genre) {
    return allBooks.filter(book => book.genre === genre);
}

const categories = [
    { title: Genre.FANTASY, books: getBooks(Genre.FANTASY) },
    { title: Genre.DRAMA, books: getBooks(Genre.DRAMA) },
    { title: Genre.ROMANCE, books: getBooks(Genre.ROMANCE) },
    { title: Genre.HISTORICAL, books: getBooks(Genre.HISTORICAL) },
    { title: Genre.THRILLER, books: getBooks(Genre.THRILLER) },
];

export const SearchPage = ({ navigation }: NavigationOnly) => {

    return (
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar barStyle='dark-content' />

            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
            >
                {categories.map(({ title, books }) => (
                    books.length > 0 && <SearchGallery books={books} title={title} navigation={navigation} />
                ))}
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
        backgroundColor: Color.BERRY_LIGHT,
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
});
