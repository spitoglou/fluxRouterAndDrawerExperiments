import React, { Component } from 'react'
import Drawer from 'react-native-drawer'
import Menu from './Menu'

class SideBar extends Component {
  closeControlPanel = () => {
    this._drawer.close()
  };

  openControlPanel = () => {
    this._drawer.open()
  };

  render() {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        content={<Menu closeControlPanel={this.closeControlPanel} />}
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