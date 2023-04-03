import React from 'react'
import Main from './src/Screens/Main'
import { Provider, useDispatch } from 'react-redux'
import { store } from './src/redux/store'

import persistStore from 'redux-persist/es/persistStore'
import { PersistGate } from 'redux-persist/integration/react'

let persistor = persistStore(store)

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  )
}

export default App