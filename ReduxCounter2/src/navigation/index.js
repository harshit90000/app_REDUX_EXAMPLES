import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Provider } from 'react-redux'
import store from '../Redux/store'
import CounterScreen from '../Screen/count/conuterScreen'

const Navigation = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Provider store={store} >
            <NavigationContainer>
                <Stack.Navigator>
                     <Stack.Screen name="CounterScreen" component={CounterScreen} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}
export default Navigation

