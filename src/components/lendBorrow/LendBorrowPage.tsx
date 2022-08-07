import React from "react";
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from "react-native";
import { allBooks } from "../../database/fakeData";
import { Color } from "../../styles/Colors";
import { LendBorrowCategory } from "./LendBorrowCategory";

export const LendBorrowPage: React.FC = () => {
    const lent = allBooks.filter(book => book.lent !== undefined);
    const borrowed = allBooks.filter(book => book.borrowed !== undefined);

    return (
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar barStyle='dark-content' />

            <View style={styles.header}>
                <Text style={styles.title}>Lend/Borrow</Text>
            </View>

            <LendBorrowCategory title="Lent books" books={lent} />
            <LendBorrowCategory title="Borrowed books" books={borrowed} />

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
