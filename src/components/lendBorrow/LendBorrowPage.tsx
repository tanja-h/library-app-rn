import React, { useState } from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { LendBorrowCategory } from "./LendBorrowCategory";
import { allBooks } from "../../database/fakeData";
import { Color } from "../../styles/Colors";
import { NavigationOnly } from "../../utils/navigationTypeUtils";
import { ExchangeType } from "../../utils/typeUtils";

export const LendBorrowPage = ({ navigation }: NavigationOnly) => {
    const lent = allBooks.filter(book => book.exchange && book.exchange.type === ExchangeType.LENT);
    const borrowed = allBooks.filter(book => book.exchange && book.exchange.type === ExchangeType.BORROWED);

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

            <LendBorrowCategory
                title="Lent books"
                books={lent}
                isExpanded={isLentExpanded}
                onPressExpand={expandLent}
                navigation={navigation}
            />
            <LendBorrowCategory
                title="Borrowed books"
                books={borrowed}
                isExpanded={isBorrowExpanded}
                onPressExpand={expandBorrow}
                navigation={navigation}
            />

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Color.BERRY_LIGHT,
    },
    container: {
        flex: 1,
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        marginTop: 16,
        letterSpacing: 1,
    },

});
