import React from 'react'
import { AppRegistry } from 'react-native'
import { connect, Provider } from 'react-redux'
import { options } from './defaults'
import { models } from './model'
import { store, createStore, replaceReducer } from './store'
import { generatorReduxNavigation } from './router'

let started = false
let Root

export default function render (name, component) {

  const {initialState, middlewares} = options
  let ConnectedNavigator

  if (started) {

    // If app has rendered, do `store.replaceReducer` to update store.
    replaceReducer(store, models)

    // Call `render` without arguments means *re-render*. Since store has updated,
    // `component` will automatically be updated, so no need to `ReactDOM.render` again.
    if (arguments.length === 0) {
      return Root
    }

  } else {

    ConnectedNavigator = connect(state => ({
      nav: state.nav,
    }))(generatorReduxNavigation(component))
    // ------------
    createStore(models, initialState, middlewares)
  }

  // Use named function get a proper displayName
  Root = function Root () {
    return (
      <Provider store={store}>
        <ConnectedNavigator/>
      </Provider>
    )
  }

  started = true

  AppRegistry.registerComponent(name, () => Root)

  return Root
}
