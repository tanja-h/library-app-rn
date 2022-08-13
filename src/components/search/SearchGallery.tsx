import React from "react";
import { StyleSheet, FlatList, Dimensions, View } from "react-native";
import { Text } from "react-native-paper";
import { SearchBookItem } from "./SearchBookItem";
import { bookMargin } from "../../styles/constants";
import { Book } from "../../utils/typeUtils";
import { NavigationOnly } from "../../utils/navigationTypeUtils";
import { RouteName } from "../../utils/routeUtils";

interface Props extends NavigationOnly {
    title: string;
    books: Book[];
}

const { width: screenWidth } = Dimensions.get("window");
const padding: number = 20;
const width = (screenWidth - 2 * padding - bookMargin) / 2;

export const SearchGallery = ({ title, books, navigation }: Props) => {
    const goToBookOverview = (id: string) => {
        navigation.navigate(RouteName.BOOK, { id });
    }


    return (
        <View style={styles.mainContainer}>
            <Text style={styles.title}>{title}</Text>

            <FlatList
                data={books}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
                snapToInterval={width + bookMargin}
                keyExtractor={(item) => item.id}
                renderItem={({ item: book }) => (
                    <SearchBookItem book={book} width={width} onPress={() => goToBookOverview(book.id)} />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: 24,
    },
    title: {
        marginBottom: 4,
        paddingLeft: padding,
        fontSize: 18,
        fontWeight: '500',
    },
    container: {
        // flex: 1,
        // paddingLeft: padding,
    },
    contentContainer: {
        paddingLeft: padding,
        paddingRight: padding - bookMargin,
    }
});
