import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { Book } from "../../utils/typeUtils";
import { borderRadius } from "../../styles/constants";
import { MyBookItem } from "./MyBookItem";

interface Props {
    books: Book[];
}

export const MyBooksGrid = ({ books }: Props) => {


    return (
        <FlatList
            data={books}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            style={styles.container}
            renderItem={({ item: book }) => (
                <MyBookItem book={book} />
            )}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        borderRadius,
        marginTop: 16,
    },
});
