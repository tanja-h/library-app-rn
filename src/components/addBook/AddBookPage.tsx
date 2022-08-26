import React, { useState } from "react";
import { StyleSheet, SafeAreaView, StatusBar, Text, View, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from "react-native";
// import { allBooks } from "../../database/booksData";
import { Color } from "../../styles/Colors";
import { borderRadius, horizontalPadding } from "../../styles/constants";
import { Genre } from "../../utils/typeUtils";
import { UserImage } from "../profile/UserImage";


export const AddBookPage = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState(Genre.DRAMA);
    const [pagesCount, setPagesCount] = useState(0);
    const [isExchange, setIsExchange] = useState(false);

    return (
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                < SafeAreaView style={styles.mainContainer} >
                    <StatusBar barStyle='dark-content' />
                    <View style={styles.container}>
                        <UserImage />
                        <View style={styles.info}>
                            <Text style={styles.text}>Title</Text>
                            <TextInput value={title} onChangeText={setTitle} style={styles.input} />
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.text}>Author</Text>
                            <TextInput value={author} onChangeText={setAuthor} style={styles.input} />
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.text}>Pages count</Text>
                            <TextInput value={pagesCount.toString()} onChangeText={(count) => setPagesCount(Number(count))} style={styles.count} keyboardType='number-pad' />
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.text}>Genre</Text>
                            <Text style={styles.text}>{genre}</Text>
                        </View>

                        <TouchableOpacity onPress={() => setIsExchange(!isExchange)} style={styles.addExchangeContainer}>
                            <Text>Add exchange details</Text>
                        </TouchableOpacity>

                        {isExchange && (
                            // (
                            // <ExchangeUser exchange={{ ...{}, type: ExchangeType.LENT } as Exchange} />
                            // )
                            <Text>exchange</Text>
                        )
                        }
                    </View>
                </SafeAreaView >
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView >
    );

};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Color.LIGHT_GREY,
    },
    container: {
        padding: horizontalPadding,
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 8,
        marginTop: 24,
    },
    input: {
        fontSize: 18,
        backgroundColor: Color.WHITE,
        flex: 1,
        height: 40,
        marginLeft: 16,
        borderRadius,
        borderWidth: StyleSheet.hairlineWidth,
        paddingHorizontal: 8,
        textAlign: 'right',
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        letterSpacing: 0.8,
    },
    count: {
        fontSize: 20,
        backgroundColor: Color.WHITE,
        height: 40,
        width: 70,
        marginLeft: 16,
        paddingHorizontal: 8,
        textAlign: 'right',
        borderRadius,
        borderWidth: StyleSheet.hairlineWidth,
    },
    addExchangeContainer: {
        height: 30,
        width: 160,
        marginTop: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius,
        backgroundColor: Color.WHITE
    }
});