import React from 'react'
import { Text, Button } from 'react-native'
import mirror, { actions, connect } from 'mirrorn'
import { Screen } from '../../components'

mirror.model({
  name: 'count',
  initialState: 0,
  reducers: {
    increment (state) {return state + 1},
    decrement (state) {return state - 1}
  },
  effects: {
    async incrementAsync () {
      await new Promise((res, rej) => {
        setTimeout(() => {
          res()
        }, 1000)
      })
      actions.count.increment()
    }
  }
})

class Count extends React.PureComponent {

  static navigationOptions = {
    title: 'Count'
  }

  goBack = () => {
    this.props.navigation.goBack(null)
  }

  render () {
    return (
      <Screen>
        <Text>{`Count: ${this.props.count}`}</Text>
        <Button title="-" onPress={() => actions.count.decrement()}/>
        <Button title="+" onPress={() => actions.count.increment()}/>
        <Button title="Async +" onPress={() => actions.count.incrementAsync()}/>
        <Button title="Go back" onPress={this.goBack}/>
      </Screen>
    )
  }

}

export default connect(state => {
  return {count: state.count}
})(Count)
