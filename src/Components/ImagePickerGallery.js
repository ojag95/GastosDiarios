import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { IconButton, Subheading, TouchableRipple } from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker';
import ImageView from "react-native-image-viewing";

/**
 *  
 * @returns Componente que renderiza una galería de fotografías
 * @dependencies react-native-paper, react-native-image-viewing
 */
const ImagePickerGallery = (props) => {

    const { title, galleryPickerEnabled, cameraPickerEnabled, visibleGalleryRoll, pictures, handlePictures } = props;
    const [visible, setIsVisible] = useState(false);
    const [state, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    const [imageIndex, setImageIndex] = useState(0)

    const handleAddImage = (result) => {
        let newPictures = pictures;
        newPictures.push({
            uri: result.uri,
            name: 'product.jpg',
            type: 'image/jpeg',
        })
        handlePictures(newPictures);
        forceUpdate()
    }

    const pickImage = async (mode) => {
        // No permissions request is necessary for launching the image library
        if (mode === 'camera') {
            const permissionResult =
                await ImagePicker.requestCameraPermissionsAsync();
            if (permissionResult.granted === false) {
                alert(
                    "You've refused to allow this appp to access your camera!",
                );
                return;
            }
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            });
            console.log(result);

            if (!result.cancelled) {
                handleAddImage(result)
            }
        } else {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            });
            console.log(result);
            if (!result.cancelled) {
                handleAddImage(result)
            }
        }
    };

    const RenderGalleryRoll = () => {
        return (pictures.map((picture, index) => (
            <View style={{ elevation: 6, marginRight: 10 }}>
                <TouchableRipple
                    borderless
                    onPress={() => {
                        setImageIndex(index)
                        setIsVisible(true)
                    }}
                    rippleColor="rgba(0, 169, 164, .32)"
                    style={{
                        elevation: 6,
                        borderRadius: 10,
                        overflow: 'hidden'
                    }}
                >
                    <Image style={{ width: 150, height: 150 }} source={{ uri: picture.uri }} />
                </TouchableRipple>
            </View>
        )))
    }

    return (
        <View>
            <View style={{ marginVertical: 10, flexDirection: 'row' }}>
                <View style={{ flex: 2, marginRight: 5, justifyContent: 'center' }}>
                    <Subheading>{title ? title : 'Galería'}</Subheading>
                </View>
                <View style={{ justifyContent: 'flex-end', flexDirection: 'row', flex: 1, marginLeft: 5 }}>
                    {(cameraPickerEnabled) &&
                        <IconButton icon={'camera'} onPress={() => pickImage('camera')} />
                    }
                    {(galleryPickerEnabled) &&
                        <IconButton icon={'image'} onPress={() => pickImage('gallery')} />
                    }
                </View>
            </View>
            {
                (visibleGalleryRoll) && <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <RenderGalleryRoll />
                </ScrollView>
            }
            <ImageView
                images={pictures}
                imageIndex={imageIndex}
                visible={visible}
                onRequestClose={() => setIsVisible(false)}
            />
        </View>
    )
}

export default ImagePickerGallery

const styles = StyleSheet.create({})