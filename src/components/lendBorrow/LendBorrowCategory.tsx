import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Book } from "../../database/fakeData";
import { Color } from "../../styles/Colors";
import { LendBorrowBooksList } from "./LendBorrowBooksList";

interface Props {
    title: string;
    books: Book[];
}

export const LendBorrowCategory = ({ title, books }: Props) => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{title} ({books.length})</Text>
            </View>
            <LendBorrowBooksList books={books} />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    header: {
        height: 50,
        width: '100%',
        borderBottomColor: Color.BLACK,
        borderBottomWidth: 1,
        justifyContent: 'center',
        paddingHorizontal: 16
    },
    title: {
        fontSize: 16
    }
});
