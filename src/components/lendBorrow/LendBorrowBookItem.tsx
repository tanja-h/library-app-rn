import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Book } from "../../database/fakeData";

interface Props {
    book: Book;
}

export const LendBorrowBookItem = ({ book }: Props) => {

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: book.coverImage }} style={styles.image} />
            </View>

            <View style={styles.details}>
                <Text style={[styles.text, styles.title]}>{book.title}</Text>
                <Text style={[styles.text, styles.title]}>{book.author}</Text>
                <Text style={styles.text}>{book.pagesCount} pages</Text>
            </View>

            <View style={styles.userContainer}>
                <Text style={styles.text}>{book.exchange?.user}</Text>
                <Text style={styles.text}>start: {book.exchange?.startDate.toLocaleDateString()}</Text>
                <Text style={styles.text}>due: {book.exchange?.dueDate.toLocaleDateString()}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        width: '100%',
        height: 180,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        flex: 1,
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 110,
        height: 140,
    },
    details: {
        flex: 1,
        paddingHorizontal: 16,
        justifyContent: 'space-evenly',
    },
    title: {
        fontWeight: '700',
    },
    text: {
        fontSize: 14,
        fontWeight: '500',
        letterSpacing: 1,
    },
    userContainer: {
        flex: 1,
        justifyContent: 'space-evenly',
    },
    user: {
        fontSize: 12,
    },
});