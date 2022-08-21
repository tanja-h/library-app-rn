import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, SafeAreaView, StatusBar, Image, TouchableOpacity } from "react-native";
import { Color } from "../../styles/Colors";
import { borderRadius } from "../../styles/constants";
import { NavigationOnly } from "../../utils/navigationTypeUtils";
import { RouteName } from "../../utils/routeUtils";
import { LogoutInfoModal } from "./LogoutInfoModal";

export const ProfilePage = ({ navigation }: NavigationOnly) => {
    const [isLogoutModalDisplayed, setIsLogoutModalDisplayed] = useState(false);

    return (
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar barStyle='dark-content' />

            <View style={styles.container}>
                <Image source={{ uri: 'https://picsum.photos/id/24/350' }} style={styles.image} />

                <Text style={styles.title}>Name</Text>

                <TouchableOpacity style={styles.buttonContainer} onPress={() => setIsLogoutModalDisplayed(true)}>
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
            </View>

            {isLogoutModalDisplayed && (
                <LogoutInfoModal onLogout={() => navigation.navigate(RouteName.LOGIN)} onCancel={() => setIsLogoutModalDisplayed(false)} />
            )}
        </SafeAreaView >
    );
};

const imageSize = 200;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Color.SALMON,
    },
    container: {
        flex: 1,
        paddingHorizontal: 32,
        alignItems: 'center',
    },
    image: {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
        marginTop: 32,
        marginBottom: 32,
        borderWidth: 1,
    },
    input: {
        width: '100%',
        height: 35,
        paddingHorizontal: 8,
        marginTop: 18,
        backgroundColor: Color.WHITE,
        borderRadius,
        borderWidth: 1,
        borderColor: Color.BLACK,

    },
    focus: {
        borderColor: '#00f',
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        marginTop: 16,
        letterSpacing: 1
    },
    buttonContainer: {
        width: 100,
        height: 50,
        backgroundColor: Color.SALMON_LIGHT,
        marginTop: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius,
        borderWidth: 1
    },
    buttonText: {
        letterSpacing: 1,
        fontWeight: '500',
    }
});
