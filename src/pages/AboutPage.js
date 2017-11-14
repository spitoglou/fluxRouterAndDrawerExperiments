import React from 'react'
import { Text, TextInput, View } from "react-native";
import { Actions } from 'react-native-router-flux'

const AboutPage = () => {
  return (
    <View style={{ alignSelf: 'center' }}>
      <Text onPress={Actions.mainPage}>Go to main Page (Scanner)</Text>
      <TextInput />
    </View>
  )
};

export default AboutPage