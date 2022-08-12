import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from "react-native";
import { allBooks } from "../../database/fakeData";
import { LendBorrowCategory } from "./LendBorrowCategory";

export const LendBorrowPage: React.FC = () => {
    const lent = allBooks.filter(book => book.lent !== undefined);
    const borrowed = allBooks.filter(book => book.borrowed !== undefined);

    const [isLentExpanded, setIsLentExpanded] = useState(false);
    const [isBorrowExpanded, setIsBorrowExpanded] = useState(true);

    const expandLent = () => {
        setIsLentExpanded(!isLentExpanded);
        setIsBorrowExpanded(false);
    }
    const expandBorrow = () => {
        setIsBorrowExpanded(!isBorrowExpanded);
        setIsLentExpanded(false);
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar barStyle='dark-content' />

            <View style={styles.header}>
                <Text style={styles.title}>Lend/Borrow</Text>
            </View>

            <LendBorrowCategory
                title="Lent books"
                books={lent}
                isExpanded={isLentExpanded}
                onPressExpand={expandLent}
            />
            <LendBorrowCategory
                title="Borrowed books"
                books={borrowed}
                isExpanded={isBorrowExpanded}
                onPressExpand={expandBorrow}
            />

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
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
