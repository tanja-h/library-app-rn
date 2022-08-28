import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Chip } from "react-native-paper";
import { Color } from "../../styles/Colors";
import { borderRadius } from "../../styles/constants";
import { Exchange, exchangeTypes, Setter } from "../../utils/typeUtils";

interface Props {
    exchange: Exchange,
    setExchange: Setter<Exchange>,
}

export const ExchangeBook = ({ exchange, setExchange }: Props) => {
    const [user, setUser] = useState('');
    const [startDate, setStartDate] = useState<Date>(new Date(2022, 7, 28));
    const [dueDate, setDueDate] = useState<Date>(new Date(2022, 7, 28));
    const [type, setType] = useState(exchangeTypes[0]);

    return (
        <View style={styles.container} >
            <View style={styles.info}>
                <Text style={styles.text}>User</Text>
                <TextInput value={user} onChangeText={setUser} style={styles.input} />
            </View>
            <View style={styles.info}>
                <Text style={styles.text}>Start date</Text>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.info}>
                <Text style={styles.text}>Due date</Text>
                <TextInput style={styles.input} />
            </View>


            <View style={styles.info}>
                <Text style={styles.text}>Exchange type</Text>
            </View>

            <View style={styles.chipContainer}>
                {exchangeTypes.map(eType => {
                    const isSelected = eType === type;

                    return (
                        <Chip
                            key={eType}
                            onPress={() => setType(eType)}
                            style={[styles.chip, isSelected && styles.selectedChip]}
                            mode='outlined'
                            selected={isSelected}
                        >
                            {eType}
                        </Chip>
                    );
                })}
            </View>
        </View >
    );

};

const padding = 8;

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        borderWidth: 1,
        padding,
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

});
