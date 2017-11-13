import React, { Component } from 'react'
import Drawer from 'react-native-drawer'
import { Text } from "react-native";

class SideBar extends Component {
  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };

  renderContent() {
    return (
      <Text onPress={this.closeControlPanel.bind(this)}>Test</Text>
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