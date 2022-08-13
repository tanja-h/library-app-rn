import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { Book } from "../../utils/typeUtils";
import { bookMargin, horizontalPadding } from "../../styles/constants";
import { MyBookItem } from "./MyBookItem";
import { Color } from "../../styles/Colors";

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
            contentContainerStyle={styles.contentContainer}
            renderItem={({ item: book }) => (
                <MyBookItem book={book} />
            )}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: horizontalPadding,
        paddingRight: horizontalPadding - bookMargin,
        backgroundColor: Color.BERRY_LIGHT,
    },
    contentContainer: {
        paddingBottom: 16
    }
});
