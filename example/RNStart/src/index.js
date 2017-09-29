import React, { Component } from 'react'
import { Text, Button } from 'react-native'
import { render, TabNavigator, TabBarBottom, StackNavigator } from 'mirrorn'
import { pagesScreen } from './screens/pages'
import { CountScreen } from './screens/count'

import { Screen } from './components'

class WelcomePage extends Component {
  static navigationOptions = {
    title: 'Welcome'
  }

  render () {
    return (
      <Screen>
        <Text>
          Welcome to Mirrorn!
        </Text>
        <Button title="Count" onPress={() => this.props.navigation.navigate('Count')}/>
        <Button title="Pages" onPress={() => this.props.navigation.navigate('Pages')}/>
      </Screen>
    )
  }
}

const MainScreen = StackNavigator({
  Welcome: {screen: WelcomePage},
  Pages: {screen: pagesScreen},
})

const RootNavigator = TabNavigator({
  Main: {screen: MainScreen},
  Count: {screen: CountScreen},
}, {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: true,
})

render('RNStart', RootNavigator)
