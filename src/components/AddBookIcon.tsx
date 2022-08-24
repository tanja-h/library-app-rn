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

export const AddBookIcon: React.FC<Props> = ({ navigation }) => {
    // const params = isExchange !== undefined ? { isExchange } : undefined;
    // console.log('params', params);

    return (
        <TouchableOpacity style={styles.container} onPress={() => { navigation.navigate(RouteName.ADD_BOOK) }}>
            < Icon name="sticker-plus-outline" size={30} color={Color.SALMON_DARK} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight: horizontalPadding
    },
});