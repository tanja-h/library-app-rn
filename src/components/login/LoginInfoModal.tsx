import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import SuccessIcon from "../../assets/success.svg";
import ErrorIcon from "../../assets/error.svg";
import { borderRadius } from "../../styles/constants";

interface Props {
    text: string;
    isSuccess: boolean;
    onClose: () => void;
}

const iconSize = 50;

export const LoginInfoModal = ({ text, isSuccess, onClose }: Props) => {
    const image = isSuccess ? <SuccessIcon width={iconSize} height={iconSize} />
        : <ErrorIcon width={iconSize} height={iconSize} />

    return (
        <Modal backdropOpacity={0.5} style={styles.modal} isVisible animationIn='bounceIn'>
            <TouchableOpacity onPress={onClose} style={styles.container}>
                {image}
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        </Modal>
    );
};


const styles = StyleSheet.create({
    modal: {
        alignSelf: 'center'
    },
    container: {
        width: 270,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        backgroundColor: "#fff",
        borderRadius,
    },
    text: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 32,
        letterSpacing: 1
    },
});
