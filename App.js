import { View, Text } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import MainContainer from './views/ScreensNavigation/MainContainer'
import store from './views/redux/store/Store'

const App = () => {
  return (
    <Provider store={store}>

    <MainContainer/>
    </Provider>

  )


}

export default App