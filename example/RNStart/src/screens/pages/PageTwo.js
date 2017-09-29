import React from 'react'
import { Text, Button } from 'react-native'
import { Screen } from '../../components'

class PageTwo extends React.PureComponent {

  static navigationOptions = {
    title: 'Page Two',
  }

  goBack = () => {
    this.props.navigation.goBack()
  }

  render () {
    return (
      <Screen>
        <Text>
          Second Screen / Page 2
        </Text>
        <Button title="Go back" onPress={this.goBack}/>
      </Screen>
    )
  }

}

export default PageTwo
