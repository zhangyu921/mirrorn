import React from 'react'
import { Text, Button } from 'react-native'
import { Screen } from '../../components'

class PageOne extends React.PureComponent {

  static navigationOptions = {
    title: '首页',
  }

  goBack = () => {
    this.props.navigation.goBack(null)
  }

  goToPageTwo = () => {
    this.props.navigation.navigate('PageTwo')
  }

  goToPageThree = () => {
    this.props.navigation.navigate('PageThree')
  }

  render () {
    return (
      <Screen>
        <Text>
          Second Screen / Page 1
        </Text>
        <Button title="Go back" onPress={this.goBack}/>
        <Button title="Go to page 2" onPress={this.goToPageTwo}/>
        <Button title="Go to page 3" onPress={this.goToPageThree}/>
      </Screen>
    )
  }

}

export default PageOne
