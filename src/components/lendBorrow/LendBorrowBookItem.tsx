import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Book } from "../../database/fakeData";
import { Color } from "../../styles/Colors";

interface Props {
    book: Book
}

export const LendBorrowBookItem = ({ book }: Props) => {

    return (
        <View style={styles.container}>
            <Image source={{ uri: book.coverImage }} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.title}>{book.title}</Text>
                <Text style={styles.title}>{book.author}</Text>
            </View>
            <View style={styles.details}>
                <Text style={styles.title}>{book.title}</Text>
                <Text style={styles.title}>{book.author}</Text>
            </View>
            <Text style={styles.genre}>{book.pagesCount} pages</Text>
        </View>
    );
};

const imageSize = 130;

const styles = StyleSheet.create({
    container: {
        padding: 16,
        width: '100%',
        height: 200,
        borderBottomWidth: StyleSheet.hairlineWidth,
        // backgroundColor: Color.SALMON_LIGHT,
        flexDirection: 'row'
    },
    image: {
        width: imageSize,
        height: imageSize,
        alignSelf: 'center',
        borderRadius: 2,
    },
    details: {
        flex: 1
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
