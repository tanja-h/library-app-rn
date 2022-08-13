import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Book } from "../../utils/typeUtils";
import { Color } from "../../styles/Colors";
import { bookMargin, borderRadius } from "../../styles/constants";

interface Props {
    book: Book;
    onPress: () => void;
}

export const LendBorrowBookItem = ({ book, onPress }: Props) => {

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
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
        </TouchableOpacity>
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
        backgroundColor: Color.WHITE,
        borderRadius,
        borderWidth: 1,
        marginTop: bookMargin,
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
