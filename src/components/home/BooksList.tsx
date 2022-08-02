import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { books } from "../../database/fakeData";
import { borderRadius } from "../../styles/constants";
import { BookItem } from "./Book";

export const BooksList: React.FC = () => {


    return (
        <FlatList
            data={books}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            style={styles.container}
            renderItem={({ item: book }) => (
                <BookItem book={book} />
            )}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        borderRadius,
        marginTop: 16,
    },
});
