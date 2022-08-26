import React from "react"
import { StyleSheet, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { Color } from "../styles/Colors"
import { horizontalPadding } from "../styles/constants"
import { NavigationOnly } from "../utils/navigationTypeUtils"
import { RouteName } from "../utils/routeUtils"

interface Props extends NavigationOnly {
    isExchange?: boolean;
}

export const AddBookIcon = ({ navigation, isExchange }: Props) => {

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate({ name: RouteName.ADD_NEW_BOOK, params: { isExchange } })}>
            < Icon name="sticker-plus-outline" size={30} color={Color.SALMON_DARK} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight: horizontalPadding
    },
});