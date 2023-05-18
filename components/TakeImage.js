import { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Button, Dimensions } from 'react-native';

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

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const cameraSize = 400;
    const cameraMarginHorizontal = (windowWidth - cameraSize) / 2;
    const cameraMarginVertical = (windowHeight - cameraSize) / 2;

    return (
        <View style={styles.container}>
            <View style={styles.cameraContainer}>
                <Camera
                    style={{
                    width: cameraSize,
                    height: cameraSize,
                    marginLeft: cameraMarginHorizontal,
                    marginRight: cameraMarginHorizontal,
                    marginTop: cameraMarginVertical,
                    marginBottom: cameraMarginVertical,
                    }}
                    ref={cameraRef}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Take Picture" onPress={takePic} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cameraContainer: {
        flex: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default TakeImage;
