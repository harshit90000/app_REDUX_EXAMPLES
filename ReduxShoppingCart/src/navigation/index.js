import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Provider } from 'react-redux'
import store from '../Redux/store'


import ProductPage from '../Screen/cart/ProductPage'
import HomePage from '../Screen/cart/HomePage'
import CartPage from '../Screen/cart/CartPage'


const Navigation = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Provider store={store} >

            <NavigationContainer>
                <Stack.Navigator>

                     
                    <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
                    
                    <Stack.Screen name="CartPage" component={CartPage} options={{
                        title: "Cart",
                        headerShown: true
                    }} />
                   
                    <Stack.Screen name="ProductPage" component={ProductPage} options={{
                        title: "Product",
                        headerShown: true
                    }} />
            

                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}
export default Navigation

