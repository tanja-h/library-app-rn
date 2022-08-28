import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, StatusBar, View } from "react-native";
import { LendBorrowCategory } from "./LendBorrowCategory";
import { allBooks } from "../../database/booksData";
import { Color } from "../../styles/Colors";
import { NavigationOnly } from "../../utils/navigationTypeUtils";
import { Book, ExchangeType } from "../../utils/typeUtils";

export const LendBorrowPage = ({ navigation }: NavigationOnly) => {
    const [lentBooks, setLentBooks] = useState<Book[]>([]);
    const [borrowedBooks, setBorrowedBooks] = useState<Book[]>([]);
    const [isLentExpanded, setIsLentExpanded] = useState(false);
    const [isBorrowExpanded, setIsBorrowExpanded] = useState(true);

    useEffect(() => {
        setLentBooks(allBooks.filter(book => book.exchange && book.exchange.type === ExchangeType.LENT));
        setBorrowedBooks(allBooks.filter(book => book.exchange && book.exchange.type === ExchangeType.BORROWED));
    }, [allBooks])

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

            <View style={styles.container}>
                <LendBorrowCategory
                    title="Lent books"
                    books={lentBooks}
                    isExpanded={isLentExpanded}
                    onPressExpand={expandLent}
                    navigation={navigation}
                />
                <LendBorrowCategory
                    title="Borrowed books"
                    books={borrowedBooks}
                    isExpanded={isBorrowExpanded}
                    onPressExpand={expandBorrow}
                    navigation={navigation}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Color.SALMON,
    },
    container: {
        flexGrow: 1,
        flexShrink: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        marginTop: 16,
        letterSpacing: 1,
    },
});
