import React from "react";
import { StyleSheet, SafeAreaView, StatusBar, Image, Text, View } from "react-native";
import { ExchangeUser } from "./ExchangeUser";
import { allBooks } from "../../database/booksData";
import { Color } from "../../styles/Colors";
import { horizontalPadding } from "../../styles/constants";

interface Props {
    id: string;
}

export const BookPage = ({ id }: Props) => {
    console.log('id', id);

    const book = allBooks.find(b => b.id === id) ?? allBooks[9]; //TODO: REMOVE

    return (
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar barStyle='dark-content' />

            <View style={styles.container}>
                <Image source={{ uri: book.coverImage }} style={styles.image} />
                <View>
                    <Text style={styles.title}>{book.title}</Text>
                    <Text style={styles.author}>{book.author}</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.pages}>Genre: {book.genre}</Text>
                    <Text style={styles.genre}>{book.pagesCount} pages</Text>
                </View>

                {book.exchange && (
                    <ExchangeUser exchange={book.exchange} />
                )}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Color.LIGHT_GREY,
    },
    container: {
        flex: 1,
        padding: horizontalPadding,
    },

    image: {
        width: 180,
        height: 250,
        alignSelf: 'center',
        borderRadius: 2,
        borderWidth: 1,
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        marginTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        marginTop: 20,
        letterSpacing: 1,
        textAlign: 'center',
    },
    author: {
        fontSize: 20,
        marginTop: 16,
        textAlign: 'center',
    },

    pages: {
        fontSize: 16,
    },
    genre: {
        fontSize: 16,
    },
});
