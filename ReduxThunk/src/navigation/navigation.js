import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Provider } from 'react-redux'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Store } from '../redux/store'

import HomePage from '../screens/HomePage'
import ProductPage from '../screens/ProductPage'


const Navigation = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: true}} />
          <Stack.Screen name="ProductPage" component={ProductPage} options={{headerShown: true}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
export default Navigation

