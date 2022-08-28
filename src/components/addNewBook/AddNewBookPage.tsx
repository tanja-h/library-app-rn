import React, { useState } from "react";
import { StyleSheet, SafeAreaView, StatusBar, Text, View, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { allBooks } from "../../database/booksData";
import { Color } from "../../styles/Colors";
import { borderRadius, horizontalPadding } from "../../styles/constants";
import { NavigationProps } from "../../utils/navigationTypeUtils";
import { Book, Exchange, genres } from "../../utils/typeUtils";
import { PhotoUpload } from "../PhotoUpload";
import { InfoModal } from "../InfoModal";
import { Chip } from 'react-native-paper';
import { ExchangeBook } from "./ExchangeBook";

function validateBookEntry(book: Book, isExchange: boolean) {
    if (!book.title || !book.author || !book.pagesCount || (isExchange && !book.exchange)) {
        return false;
    }

    return true;
}

const initialCoverImage = "https://picsum.photos/id/24/350";

export const AddNewBookPage = ({ route, navigation }: NavigationProps) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState(genres[0]);
    const [photo, setPhoto] = useState("https://picsum.photos/id/24/350");
    const [pagesCount, setPagesCount] = useState(0);
    const [isExchange, setIsExchange] = useState(route.params?.isExchange);
    const [exchange, setExchange] = useState<Exchange>({} as Exchange);
    const [isErrorModalDisplayed, setIsErrorModalDisplayed] = useState(false);
    const [isSuccessModalDisplayed, setIsSuccessModalDisplayed] = useState(false);

    const saveBook = () => {
        const book: Book = { author, title, pagesCount, genre, cover: photo, id: (pagesCount + 1).toString() };
        const isValid = validateBookEntry(book, isExchange);
        if (isValid) {
            allBooks.push(book);
            setIsSuccessModalDisplayed(true);
        } else {
            setIsErrorModalDisplayed(true);
        }
    }

    const closeSuccessModal = () => {
        setIsSuccessModalDisplayed(true);
        navigation.goBack();
    }

    return (
        // <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.mainContainer} >
            <StatusBar barStyle='dark-content' />
            <ScrollView contentContainerStyle={styles.container}>
                <PhotoUpload photo={photo} setPhoto={setPhoto} />
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
                </View>

                <ScrollView style={styles.chipContainer} horizontal showsHorizontalScrollIndicator={false}>
                    {genres.map(g => {
                        const isSelected = g === genre;

                        return (
                            <Chip
                                key={g}
                                onPress={() => setGenre(g)}
                                style={[styles.chip, isSelected && styles.selectedChip]}
                                mode='outlined'
                                selected={isSelected}
                            >
                                {g}
                            </Chip>
                        );
                    })}
                </ScrollView>


                <TouchableOpacity onPress={() => setIsExchange(!isExchange)} style={styles.addExchangeContainer}>
                    <Text>Add exchange details</Text>
                </TouchableOpacity>

                {isExchange && (
                    <ExchangeBook exchange={exchange} setExchange={setExchange} />
                )}

                <TouchableOpacity onPress={saveBook} style={styles.saveContainer} activeOpacity={0.6}>
                    <Text style={styles.saveText}>Save Book</Text>
                </TouchableOpacity>

                {isSuccessModalDisplayed && (
                    <InfoModal text={`Book '${title}' successfuly saved!`} isSuccess onClose={closeSuccessModal} />
                )}

                {isErrorModalDisplayed && (
                    <InfoModal text={`Fields can't be empty! Book is not saved!`} isSuccess={false} onClose={() => setIsErrorModalDisplayed(false)} />
                )}
            </ScrollView>
        </SafeAreaView >
        //{/* </TouchableWithoutFeedback> */ }
        //{/* </KeyboardAvoidingView > */ }
    );

};

const padding = 8;

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
        paddingHorizontal: padding,
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
        paddingHorizontal: padding,
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
        paddingHorizontal: padding,
        textAlign: 'right',
        borderRadius,
        borderWidth: StyleSheet.hairlineWidth,
    },
    chipContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    chip: {
        height: 35,
        textAlign: 'center',
        paddingHorizontal: 4,
        marginRight: 8,
        backgroundColor: Color.WHITE,
        borderColor: Color.BLACK,
    },
    selectedChip: {
        borderWidth: 1,
    },
    addExchangeContainer: {
        height: 40,
        width: 160,
        marginTop: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius,
        backgroundColor: Color.WHITE
    },
    saveContainer: {
        height: 40,
        width: 160,
        marginTop: 24,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1.5,
        borderRadius,
        borderColor: Color.SALMON_DARK,
        backgroundColor: Color.WHITE,
    },
    saveText: {
        color: Color.SALMON_DARK,
        fontWeight: '500',
        letterSpacing: 1,
    }
});
