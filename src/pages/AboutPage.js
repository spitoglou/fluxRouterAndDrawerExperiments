import React from 'react'
import { Text, View } from "react-native";
import { Actions } from 'react-native-router-flux'

const AboutPage = () => {
  return (
    <View style={{ margin: 128 }}>
      <Text onPress={Actions.mainPage}>Go to main Page (Scanner)</Text>
    </View>
  )
};

export default AboutPage