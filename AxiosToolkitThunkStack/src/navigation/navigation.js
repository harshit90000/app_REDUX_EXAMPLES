import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import ProductList from '../Screen/ProductList';
import ProductPage from '../Screen/ProductPage';
import Stack from './stack';
import ImageZooming from '../Screen/ImageZoom';
 
const Navigation = () => {
    const stack = createNativeStackNavigator()
    const tab = createBottomTabNavigator()
    return (
        <NavigationContainer>

            {/* <stack.Navigator screenOptions=
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
                <stack.Screen name="ProductList" component={ProductList} options={{ headerShown: "true", title: "Product List" }} />
                <stack.Screen name="ProductPage" component={ProductPage} options={{ headerShown: "true", title: "Product Page" }} />
            </stack.Navigator> */}

            <tab.Navigator screenOptions= {{
                    headerStyle: { backgroundColor: "dodgerblue" },
                    headerTintColor: "white",
                }}>
                <tab.Screen name="Stack"
                    component={Stack}
                    options={{ headerShown: false, title: "Products" }}
                />
                <tab.Screen name="ImageZooming"
                    component={ImageZooming}
                    options={{ headerShown: true, title: "Image Zooming"  }} />
                    
            </tab.Navigator>
            
        </NavigationContainer>
    );
}



export default Navigation;
