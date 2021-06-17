'use strict';
import React, {PureComponent} from 'react';
import {
  Alert,
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RNCamera} from 'react-native-camera';

export default class Scanner1 extends PureComponent {
  constructor(props) {
    super(props);

    this.barcodes = true
  }

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({barcodes}) => {
            if (barcodes && barcodes[0]) {
              let barcode = barcodes[0];
              if (this.barcodes) {
                this.barcodes = false
                Alert.alert(
                  'Barcode Recognized',
                  `Barcode : ${barcode.data} \n Type : ${barcode.type || '-'}`,
                  [
                    {
                      text: 'OK',
                      onPress: () => {
                        try {
                          this.props.navigation.goBack();
                        } catch (e) {}
                      },
                    },
                  ],
                );
              } else {
                return
              }
            }
          }}
          // onBarCodeRead={e => {
          //   if (e && e.data) {
          //     if (!this.barcodes.includes(e.data)) {
          //       this.barcodes.push(e.data);
          //       Alert.alert(
          //         'Barcode Recognized',
          //         `Barcode : ${e.data} \n Type : ${e.type}`,
          //         [{text: 'OK', onPress: () => this.props.navigation.goBack()}],
          //       );
          //     }
          //   }
          // }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
