import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Book } from "../../utils/typeUtils";
import { Color } from "../../styles/Colors";
import { activeOpacity, bookMargin, borderRadius } from "../../styles/constants";

interface Props {
    book: Book;
    width: number;
    onPress: () => void;
}

export const SearchBookItem = ({ book, width, onPress }: Props) => {

    return (
        <TouchableOpacity style={[styles.container, { width }]} onPress={onPress} activeOpacity={activeOpacity}>
            <Image source={{ uri: book.coverImage }} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.title}>{book.title}</Text>
                <Text style={styles.author}>{book.author}</Text>
            </View>
        </TouchableOpacity>
    );
};

const imageSize = 100;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 240,
        padding: 12,
        borderRadius,
        borderWidth: 1,
        backgroundColor: Color.WHITE,
        marginTop: 8,
        marginRight: bookMargin,
    },
    image: {
        width: imageSize,
        height: imageSize,
        alignSelf: 'center',
        borderRadius: 2,
        borderWidth: 1,
    },
    info: {
        flex: 1
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 16,
        letterSpacing: 1,
        flexGrow: 1
    },
    author: {
        fontSize: 12,
    },
});
