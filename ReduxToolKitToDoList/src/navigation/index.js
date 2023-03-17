import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import TodoList from '../Screen'


const Navigation = () => {
    const Stack = createNativeStackNavigator()
    return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="TodoList" component={TodoList} options={{
                        title: "Todo List",
                        headerShown: true
                    }} />
                </Stack.Navigator>
            </NavigationContainer>
    
    )
}
export default Navigation

