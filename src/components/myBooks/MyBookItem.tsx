import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Book } from "../../utils/typeUtils";
import { Color } from "../../styles/Colors";
import { borderRadius } from "../../styles/constants";

interface Props {
    book: Book;
}

export const MyBookItem = ({ book }: Props) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: book.coverImage }} style={styles.image} />
            <Text style={styles.title}>{book.title}</Text>
            <Text style={styles.genre}>{book.genre}</Text>
            <Text style={styles.genre}>{book.pagesCount} pages</Text>
        </View>
    );
};

const imageSize = 130;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        paddingHorizontal: 12,
        borderRadius,
        borderWidth: 1,
        backgroundColor: Color.WHITE,
        marginTop: 8,
        marginRight: 8,
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
    },
    genre: {
        fontSize: 12,
        fontWeight: '600',
        marginTop: 8,
    },
});