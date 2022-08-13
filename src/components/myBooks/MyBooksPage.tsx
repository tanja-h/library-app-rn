import React from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { allBooks } from "../../database/fakeData";
import { NavigationOnly } from "../../utils/navigationTypeUtils";
import { MyBooksGrid } from "./MyBooksGrid";

export const MyBooks = ({ navigation }: NavigationOnly) => {
    const books = allBooks.filter(book => book.exchange === undefined);

    return (
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar barStyle='dark-content' />

            <MyBooksGrid books={books} navigation={navigation} />
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
