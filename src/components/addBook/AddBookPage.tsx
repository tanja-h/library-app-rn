import React from "react";
import { StyleSheet, SafeAreaView, StatusBar, Image, Text, View, TextInput } from "react-native";
// import { allBooks } from "../../database/booksData";
import { Color } from "../../styles/Colors";
import { borderRadius, horizontalPadding } from "../../styles/constants";
import { Exchange, ExchangeType } from "../../utils/typeUtils";
import { ExchangeUser } from "../book/ExchangeUser";
import { UserImage } from "../profile/UserImage";

interface Props {
    isExchange?: ExchangeType;
}

export const AddBookPage = ({ isExchange }: Props) => {
    console.log('type', isExchange);


    return (
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar barStyle='dark-content' />

            <View style={styles.container}>
                <UserImage />
                <View style={styles.info}>
                    <Text style={styles.title}>Title</Text>
                    <TextInput style={styles.input} />
                </View>
                <View style={styles.info}>
                    <Text style={styles.title}>Author</Text>
                    <TextInput style={styles.input} />
                </View>
                <View style={styles.info}>
                    <Text style={styles.text}>Genre</Text>
                    <Text style={styles.text}>genre</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.text}>pagesCount:</Text>
                    <Text style={styles.text}>count</Text>
                </View>

            </View>
            {isExchange && (
                <ExchangeUser exchange={{ ...{}, type: ExchangeType.LENT } as Exchange} />
            )}

        </SafeAreaView>
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
    title: {
        fontSize: 24,
        fontWeight: '600',
        letterSpacing: 1,
    },
    input: {
        fontSize: 20,
        backgroundColor: Color.WHITE,
        flex: 1,
        height: 40,
        marginLeft: 16,
        borderRadius,
        borderWidth: StyleSheet.hairlineWidth,
    },
    text: {
        fontSize: 16,
    },
});