import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import { borderRadius } from "../../styles/constants";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Color } from "../../styles/Colors";

interface Props {
    onLogout: () => void;
    onCancel: () => void;
}

export const LogoutInfoModal = ({ onLogout, onCancel }: Props) => (
    <Modal backdropOpacity={0.5} style={styles.modal} isVisible animationIn='bounceIn'>
        <View style={styles.container}>
            <Icon name="logout" size={30} />
            <Text style={[styles.text, styles.title]}>Are you sure you want to logout ?</Text>

            <View style={styles.buttons}>
                <TouchableOpacity onPress={onLogout} style={styles.button}>
                    <Text style={[styles.text, styles.buttonText]}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onCancel} style={styles.button}>
                    <Text style={[styles.text, styles.buttonText]}>No</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
);

const styles = StyleSheet.create({
    modal: {
        alignSelf: 'center',
    },
    container: {
        height: 300,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.WHITE,
        borderWidth: 2,
        borderRadius,
    },
    title: {
        marginTop: 32,
        textAlign: 'center',
    },
    text: {
        fontSize: 18,
        lineHeight: 24,
        fontWeight: '600',
        letterSpacing: 1
    },
    buttons: {
        flexDirection: 'row',
        marginTop: 32,
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        borderWidth: 1,
        borderRadius,
        height: 40,
        width: 50,
        textAlign: 'center',
        paddingTop: 7,
        backgroundColor: Color.LIGHT_GREY
    },
});
