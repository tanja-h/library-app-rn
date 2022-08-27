import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Color } from "../styles/Colors";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ImageLibraryOptions, launchImageLibrary } from 'react-native-image-picker';

interface Props {
    initialPhoto: string;
    isCircle?: boolean;
}

const options: ImageLibraryOptions = {
    mediaType: 'photo'
};

export const ImageUpload = ({ initialPhoto, isCircle }: Props) => {
    const [photo, setPhoto] = useState(initialPhoto);

    const uploadImage = () => {
        launchImageLibrary(options, ({ didCancel, errorMessage, assets }) => {
            if (didCancel) {
                console.log('User cancelled image picker');
            } else if (errorMessage) {
                console.log('ImagePicker Error: ', errorMessage);
            } else if (assets && assets[0] && assets[0].uri) {
                setPhoto(assets[0].uri);
            }
        });
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: photo }} style={[styles.image, isCircle && styles.circle]} />

            <TouchableOpacity style={styles.iconContainer} onPress={() => uploadImage()}>
                <Icon name="file-image-plus" size={30} />
            </TouchableOpacity>
        </View>
    );
};

const imageSize = 200;
const iconSize = 40;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 32,
    },
    image: {
        width: imageSize,
        height: imageSize,
        borderWidth: 1,
    },
    circle: {
        borderRadius: imageSize / 2,
    },
    iconContainer: {
        width: iconSize,
        height: iconSize,
        borderRadius: iconSize / 2,
        borderWidth: 1,
        backgroundColor: Color.LIGHT_GREY,
        opacity: 0.9,
        position: 'absolute',
        top: 10,
        right: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
