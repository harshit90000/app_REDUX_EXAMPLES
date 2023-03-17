import React from 'react'
import { useEffect } from 'react'
import { View, Text, ActivityIndicator, ScrollView, SafeAreaView } from 'react-native'
import { fetchUser } from './ApiReducer'
import { useDispatch, useSelector } from 'react-redux'


const HomeScreen = () => {

    console.log('Its Working')

    const dispatch = useDispatch();

    useEffect(() => {
        console.log('fetching')
        dispatch(fetchUser());
    }, []);

    const data = useSelector(state => state.apiReducer)

    console.log('----------home screen ----------',data)

    if (data?.loading) return <ActivityIndicator size="small" color="#0000ff" />

    return (
        <SafeAreaView style={{flex:1, backgroundColor: "skyblue"}}>
        <ScrollView>
            <Text>HomeScreen</Text>
            
            {data.data.map(item => ( 
                <View>
                    <Text>Name: {item.name}</Text>
                    <Text>Email: {item.email}</Text>
                </View>
            ))}
            
        </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen