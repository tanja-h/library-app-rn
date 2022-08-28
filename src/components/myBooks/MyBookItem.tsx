import React from "react";
import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { Book } from "../../utils/typeUtils";
import { Color } from "../../styles/Colors";
import { activeOpacity, bookMargin, borderRadius } from "../../styles/constants";

interface Props {
    book: Book;
    onPress: () => void;
}

export const MyBookItem = ({ book, onPress }: Props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={activeOpacity}>
            <Image source={{ uri: book.cover }} style={styles.image} />
            <Text style={styles.title}>{book.title}</Text>
            <Text style={styles.genre}>{book.genre}</Text>
            <Text style={styles.genre}>{book.pagesCount} pages</Text>
        </TouchableOpacity>
    );
};

const imageSize = 130;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        borderRadius,
        borderWidth: 1,
        backgroundColor: Color.WHITE,
        marginTop: bookMargin,
        marginRight: bookMargin,
    },
    image: {
        width: imageSize,
        height: imageSize,
        alignSelf: 'center',
        borderRadius: 2,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 16,
        letterSpacing: 1,
        flexGrow: 1,
    },
    genre: {
        fontSize: 12,
        fontWeight: '600',
        marginTop: 8,
    },
});
