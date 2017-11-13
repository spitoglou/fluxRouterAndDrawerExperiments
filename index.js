import { AppRegistry } from 'react-native';
import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux';
import MainPage from './src/pages/MainPage';
import AboutPage from './src/pages/AboutPage';
import SideBar from './src/components/SideBar'

class App extends Component {
  render() {
    return (
      <SideBar>
        <Router>
          <Scene key="root" hideNavBar>
            <Scene key="mainPage" component={MainPage} hideNavBar title="Home" />
            <Scene key="aboutPage" component={AboutPage} title="About" initial={true} />
          </Scene>
        </Router>
      </SideBar>
    )
  }
}

AppRegistry.registerComponent('test_native', () => App);
