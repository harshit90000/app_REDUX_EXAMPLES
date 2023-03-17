import { SafeAreaView } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store'
import CounterScreen from './CounterScreen'

const MainScreen = () => {
    return (
        <SafeAreaView>
            <Provider store={store}>
                <CounterScreen />
            </Provider>
        </SafeAreaView>
    )
}

export default MainScreen;