import React, { Component } from 'react'
import { Text, View } from "react-native";
import { Actions } from 'react-native-router-flux';

class Menu extends Component {


  render() {
    return (
      <View>
        <Text onPress={() => {
          Actions.mainPage();
          this.props.closeControlPanel()
        }}>Home</Text>
        <Text onPress={() => {
          Actions.aboutPage();
          this.props.closeControlPanel()
        }}>About</Text>
      </View>
    )
  }
}

export default Menu