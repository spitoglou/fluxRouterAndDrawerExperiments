import {AppRegistry, Text, View} from 'react-native';
import React, {Component} from 'react'
import {Actions, Router, Scene} from 'react-native-router-flux';
import App from './App';
import Drawer from 'react-native-drawer'

const Page = () => {
    return (
        <View style={{margin: 128}}>
            <Text onPress={Actions.pageOne}>This is PageTwo!</Text>
        </View>
    )
};

export default class LastApp extends Component {
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
                <Router>

                    <Scene key="root" tabs={true} hideNavBar panHandlers={null}>

                        <Scene key="pageOne" component={App} hideNavBar title="PageOne"/>
                        <Scene key="pageTwo" component={Page} title="PageTwo" initial={true}/>

                    </Scene>

                </Router>
            </Drawer>
        )
    }
}

AppRegistry.registerComponent('test_native', () => LastApp);
