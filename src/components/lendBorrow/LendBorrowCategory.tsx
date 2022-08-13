import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { List } from 'react-native-paper';
import { LendBorrowBooksList } from "./LendBorrowBooksList";
import { Book } from "../../utils/typeUtils";
import { Color } from "../../styles/Colors";
import { NavigationOnly } from "../../utils/navigationTypeUtils";

interface Props extends NavigationOnly {
    title: string;
    books: Book[];
    isExpanded: boolean;
    onPressExpand: () => void;
}

export const LendBorrowCategory = ({ title, books, isExpanded, onPressExpand, navigation }: Props) => {
    const TitleC: React.FC = () => (
        <View style={styles.header}>
            <Text style={styles.title}>{title} ({books.length})</Text>
        </View>
    );

    return (
        <List.Accordion
            title={<TitleC />}
            expanded={isExpanded}
            onPress={onPressExpand}
            right={() => <></>}
            style={styles.container}
        >
            <LendBorrowBooksList books={books} navigation={navigation} />
        </List.Accordion>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        padding: 0,
        paddingTop: 8,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Color.BLACK,
        backgroundColor: Color.LIGHT_GREY,
    },
    header: {
        width: '100%',
        paddingLeft: 16,
    },
    title: {
        fontSize: 16,
        letterSpacing: 0.5,
        fontWeight: '500',
    }
});
