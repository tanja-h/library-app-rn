import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { Book } from "../../utils/typeUtils";
import { bookMargin, horizontalPadding } from "../../styles/constants";
import { MyBookItem } from "./MyBookItem";
import { Color } from "../../styles/Colors";
import { NavigationOnly } from "../../utils/navigationTypeUtils";
import { RouteName } from "../../utils/routeUtils";

interface Props extends NavigationOnly {
    books: Book[];
}

export const MyBooksGrid = ({ books, navigation }: Props) => {
    const goToBookOverview = (id: string) => {
        navigation.navigate(RouteName.BOOK, { id });
    }

    return (
        <FlatList
            data={books}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
            renderItem={({ item: book }) => (
                <MyBookItem book={book} onPress={() => goToBookOverview(book.id)} />
            )}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: horizontalPadding,
        paddingRight: horizontalPadding - bookMargin,
    },
    contentContainer: {
        paddingBottom: 16
    }
});
