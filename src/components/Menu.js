import React, { Component } from 'react'
import { Text, View } from "react-native";
import { Actions } from 'react-native-router-flux';

class Menu extends Component {

  _navigate(page) {
    Actions[page]();
    //this.props.closeControlPanel()
  }

  render() {
    return (
      <View>
        <Text onPress={() => this._navigate('mainPage')}>Home</Text>
        <Text onPress={() => this._navigate('aboutPage')}>About</Text>
      </View>
    )
  }
}

export default Menu