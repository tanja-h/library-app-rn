import React from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { allBooks } from "../../database/booksData";
import { Color } from "../../styles/Colors";
import { NavigationOnly } from "../../utils/navigationTypeUtils";
import { MyBooksGrid } from "./MyBooksGrid";

export const MyBooksPage = ({ navigation }: NavigationOnly) => {
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
        backgroundColor: Color.BERRY_LIGHT,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        marginTop: 16,
        letterSpacing: 1,
    },
});
