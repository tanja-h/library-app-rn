import React from "react";
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from "react-native";
import { allBooks } from "../../database/fakeData";
import { Color } from "../../styles/Colors";
import { MyBooksGrid } from "./MyBooksGrid";

export const MyBooks: React.FC = () => {
    const books = allBooks.filter(book => book.lent === undefined && book.borrowed === undefined);

    return (
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar barStyle='dark-content' />

            <View style={styles.header}>
                <Text style={styles.title}>My books</Text>
            </View>

            <MyBooksGrid books={books} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Color.SALMON_LIGHT,
    },
    container: {
        flex: 1,
        paddingHorizontal: 24,
    },
    header: {
        paddingHorizontal: 24,
        paddingBottom: 4,
        borderBottomWidth: 2,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        marginTop: 16,
        letterSpacing: 1,
    },
});
