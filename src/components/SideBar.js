import React, { Component } from 'react'
import Drawer from 'react-native-drawer'
import { Text, View } from "react-native";
import { Actions } from 'react-native-router-flux';

class SideBar extends Component {
  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };

  renderContent() {
    return (
      <View>
        <Text onPress={() => {
          Actions.mainPage();
          this.closeControlPanel()
        }}>Home</Text>
        <Text onPress={() => {
          Actions.aboutPage();
          this.closeControlPanel()
        }}>About</Text>
      </View>
    )
  }

  render() {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        content={this.renderContent()}
        open={false}
        openDrawerOffset={100}
        acceptPan={true}
        panOpenMask={.1}
        panCloseMask={100}
        tweenHandler={Drawer.tweenPresets.parallax}
      >
        {this.props.children}
      </Drawer>
    );
  }
}

export default SideBar