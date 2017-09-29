import { StackNavigator } from 'mirrorn'
import Count from './Count'

const CountNavigator = StackNavigator(
  {
    Count: {screen: Count},
  },
  {
    initialRouteName: 'Count',
  },
)

CountNavigator.navigationOptions = {
  title: 'Count',
}

export default CountNavigator