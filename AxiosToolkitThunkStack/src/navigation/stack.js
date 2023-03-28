import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductList from '../Screen/ProductList';
import ProductPage from '../Screen/ProductPage';

const Stack = () => {
    const stack = createNativeStackNavigator()
    return (
        <stack.Navigator screenOptions=
            {{
                headerStyle: { backgroundColor: "dodgerblue" },
                headerTintColor: "white",
                headerShown: "false",
                gestureEnabled: true,
                gestureDirection: "vertical",
                presentation: "card"
            }}
            headerMode="navigation"
            animation="fade">
            <stack.Screen name="ProductList"
                component={ProductList}
                options= {{ title: "Product List" }} />
            <stack.Screen name="ProductPage"
                component={ProductPage}
                options= {{ headerBackVisible:true, title: "Product Page" }} />
        </stack.Navigator>
    );
}

export default Stack;