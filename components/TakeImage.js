import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image } from 'react-native';

import { Camera } from 'expo-camera';

import CameraError from './CameraError'
import ScanBoard from './ScanBoard';


function TakeImage() {
    let cameraRef = useRef();
    const [hasCameraPermission, setHasCameraPermission] = useState();
    const [photo, setPhoto] = useState();

    // Request camera permissions
    useEffect(() => {
        (async () => {
            const cameraPermission = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraPermission.status === "granted")
        })();
    }, []);

    // Insufficient camera permissions
    if (hasCameraPermission === undefined || !hasCameraPermission) {
        return <CameraError />
    }

    let takePic = async () => {
        let options = {
            quality: 1,
            base64: true,
            exif: false
        };

        let newPhoto = await cameraRef.current.takePictureAsync(options);
        setPhoto(newPhoto);
    }

    if (photo) {
        return (
            <ScanBoard boardImage={photo}/>
        )
    }


    return (
        <Camera style={styles.container} ref={cameraRef}>
            <View style={styles.buttonContainer}>
                <Button title="Take Picture" onPress={takePic} />
            </View>
        </Camera>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    buttonContainer: {
        marginBottom: 32
    },
    preview: {
        alignSelf: 'stretch',
        flex: 1
    }
})

export default TakeImage;
