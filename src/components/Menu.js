import React, { Component } from 'react'
import { Text, View } from "react-native";
import { Actions } from 'react-native-router-flux';
import { Button, Card } from 'react-native-elements'

class Menu extends Component {

  _navigate(page) {
    Actions[page]();
    //this.props.closeControlPanel()
  }

  render() {
    return (
      <View>
        <Card
          title='BarCode Scanner'
          image={require('../../images/logo.jpg')}>
          <Text style={{ marginBottom: 10, alignSelf: 'center' }}>
            Various Experiments.
          </Text>
        </Card>
        <Button
          containerViewStyle={{ margin: 10 }}
          backgroundColor={'green'}
          onPress={() => this._navigate('mainPage')}
          title='Home'
        />
        <Button
          containerViewStyle={{ margin: 10 }}
          backgroundColor={'blue'}
          onPress={() => this._navigate('aboutPage')}
          title='About'
        />
      </View>
    )
  }
}

export default Menu