import React from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { allBooks } from "../../database/fakeData";
import { MyBooksGrid } from "./MyBooksGrid";

export const MyBooks: React.FC = () => {
    const books = allBooks.filter(book => book.exchange === undefined);

    return (
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar barStyle='dark-content' />

            <MyBooksGrid books={books} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        marginTop: 16,
        letterSpacing: 1,
    },
});
