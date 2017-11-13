/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Camera from 'react-native-camera';
import { CardSection } from "../components/common/CardSection";
import { Button } from "../components/common/Button";
import { Header } from "../components/common/Header";


class MainPage extends Component<{}> {
  state = {
    hasCameraPermission: null,
    cameraActive: false,
    type: '',
    code: ''
  };

  _handleBarCodeRead = ({ type, data }) => {
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    this.setState({ cameraActive: false, type: type, code: data })
  };

  _activateScanner() {
    this.setState({ cameraActive: true })
  }

  componentWillMount() {
    console.log('Component will Mount')
  }

  renderCamera() {
    return (
      <View style={{ flex: 1 }}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          onBarCodeRead={this._handleBarCodeRead.bind(this)}
        >
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
        </Camera>
        <CardSection>
          <Button onPress={() => this.setState({ cameraActive: false })}>
            Go Back
          </Button>
        </CardSection>
      </View>
    );
  }

  render() {
    if (this.state.cameraActive) {
      return this.renderCamera()
    } else {
      return (
        <View>
          <Header headerText={'Scanner App'} />
          <Text>Type: {this.state.type}</Text>
          <Text>Code: {this.state.code}</Text>
          <CardSection>
            <Button onPress={this._activateScanner.bind(this)}>
              Activate Camera/Scanner
            </Button>
          </CardSection>
        </View>
      )
    }
  }

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({ metadata: options })
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

export default MainPage
