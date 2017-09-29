import React from 'react'
import { Text, Button } from 'react-native'
import { Screen } from '../../components'

class PageThree extends React.PureComponent {

  static navigationOptions = {
    title: 'Page Three',
  }

  goBack = () => {
    this.props.navigation.goBack()
  }

  render () {
    return (
      <Screen>
        <Text>
          Second Screen / Page 3
        </Text>
        <Button title="Go back" onPress={this.goBack}/>
      </Screen>
    )
  }

}

export default PageThree
