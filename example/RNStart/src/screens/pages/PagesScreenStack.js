/**
 * Created by ZhangYu on 2017/4/17.
 */
import { StackNavigator } from 'mirrorn'
import PageOne from './PageOne'
import PageTwo from './PageTwo'
import PageThree from './PageThree'

let PagesScreen = StackNavigator(
  {
    PageOne: {screen: PageOne},
    PageTwo: {screen: PageTwo},
    PageThree: {screen: PageThree},
  },
  {
    initialRouteName: 'PageOne',
    headerMode: 'none'
  },
)
PagesScreen.navigationOptions = {
  title: 'Pages',
  tabBarVisible: false
}

export default PagesScreen