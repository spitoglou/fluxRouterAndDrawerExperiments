import React from 'react'
import { View } from "react-native";
import { Actions } from 'react-native-router-flux'
import { Avatar, Button, FormInput, FormLabel } from 'react-native-elements'

const AboutPage = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Avatar
        large
        rounded
        source={{ uri: "https://avatars2.githubusercontent.com/u/938287?s=460&v=4" }}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
        containerStyle={{ marginTop: 30 }}
      />
      <Button
        raised
        onPress={Actions.mainPage}
        color={'white'}
        backgroundColor={'blue'}
        icon={{ name: 'home' }}
        title='Go to main Page (Scanner)'
        borderRadius={5}
        containerViewStyle={{ alignSelf: 'stretch', margin: 20, borderRadius: 5 }}
      />
      <FormLabel
        containerStyle={{ alignSelf: 'flex-start' }}
      >Test Input</FormLabel>
      <FormInput />
    </View>
  )
};

export default AboutPage