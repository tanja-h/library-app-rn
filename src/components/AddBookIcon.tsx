import React from "react"
import { StyleSheet, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { Color } from "../styles/Colors"
import { horizontalPadding } from "../styles/constants"

export const AddBookIcon: React.FC = () => {

    return (
        <TouchableOpacity style={styles.container} onPress={() => { }}>
            < Icon name="plus-circle-outline" size={30} color={Color.SALMON_DARK} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight: horizontalPadding
    },
});