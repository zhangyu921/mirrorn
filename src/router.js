import React from 'react'
import PropTypes from 'prop-types'
import { BackHandler, BackAndroid } from 'react-native'
import { NavigationActions, addNavigationHelpers } from 'react-navigation'

export let RootNavigator

export function generatorReduxNavigation (component) {
  RootNavigator = component
  return class ReduxNavigation extends React.Component {
    static propTypes = {
      dispatch: PropTypes.func.isRequired,
      nav: PropTypes.object.isRequired,
    }

    componentDidMount () {
      if (BackHandler) {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
      } else {
        BackAndroid.addEventListener('hardwareBackPress', this.onBackPress)
      }
    }

    componentWillUnmount () {
      if (BackHandler) {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
      } else {
        BackAndroid.removeEventListener('hardwareBackPress', this.onBackPress)
      }
    }

    onBackPress = () => {
      const {dispatch, nav} = this.props
      if (nav.index === 0) {
        return false
      }
      dispatch(NavigationActions.back(null))
      return true
    }

    render () {
      const {dispatch, nav} = this.props
      const navigation = addNavigationHelpers({
        dispatch,
        state: nav
      })

      return <RootNavigator navigation={navigation}/>
    }
  }
}
