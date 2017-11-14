import { AppRegistry } from 'react-native';
import React, { Component } from 'react'
import { Drawer, Router, Scene } from 'react-native-router-flux';
import MainPage from './src/pages/MainPage';
import AboutPage from './src/pages/AboutPage';
import Menu from './src/components/Menu'
import MenuIcon from './images/menu_burger.png';

class App extends Component {
  render() {
    return (

      <Router>
        <Drawer
          hideNavBar
          key="drawer"
          contentComponent={Menu}
          drawerWidth={300}
          menuIcon={MenuIcon}
        >
          <Scene key="root">
            <Scene key="mainPage" component={MainPage} title="Home" />
            <Scene key="aboutPage" component={AboutPage} title="About" initial={true} />
          </Scene>
        </Drawer>
      </Router>

    )
  }
}

AppRegistry.registerComponent('test_native', () => App);
