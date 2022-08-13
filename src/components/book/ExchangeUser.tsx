import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Color } from "../../styles/Colors";
import { borderRadius } from "../../styles/constants";
import { Exchange } from "../../utils/typeUtils";

interface Props {
    exchange: Exchange;
}

export const ExchangeUser = ({ exchange }: Props) => {

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>Exchange</Text>
                <Text style={styles.text}>
                    User: <Text style={styles.bold}>{exchange.user}</Text>
                </Text>
                <Text style={styles.text}>
                    Exchange type: <Text style={styles.bold}>{exchange.type.toLowerCase()}</Text>
                </Text>
                <Text style={styles.text}>
                    Start date: <Text style={styles.bold}>{exchange.startDate.toLocaleDateString()}</Text>
                </Text>
                <Text style={styles.text}>
                    Due date: <Text style={styles.bold}>{exchange.dueDate.toLocaleDateString()}</Text>
                </Text>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 32,
    },
    container: {
        borderRadius,
        borderWidth: 2,
        borderColor: Color.SALMON_DARK,
        width: '100%',
        height: 190,
        justifyContent: 'space-evenly',
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 18,
        textDecorationLine: 'underline',
        fontWeight: '700',
        color: Color.SALMON_DARK,
        marginBottom: 8,
    },
    text: {
        fontSize: 16,
        fontWeight: '300',
        letterSpacing: 0.7,
    },
    bold: {
        fontWeight: '600'
    }
});
