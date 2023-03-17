import React from 'react';
import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import { useDispatch } from 'react-redux';
import { incrementValue } from '../../Redux/Action/counterAction';
const Controller = ({ counterValue }) => {
    const dispatch = useDispatch()
    const increment = () => {
        if (dispatch != "") {
            dispatch(incrementValue("increment"))
        }
    }
    const decrement = () => {
        if (dispatch != "") {
            dispatch(incrementValue("decrement"))
        }
    }
    const Show = () => {
        dispatch(incrementValue("0"))
    }
    return (
        <SafeAreaView >
            <View style={styles.mainView}>
                <TouchableOpacity style={styles.buttonView} onPress={() => increment()}>
                    <Text style={styles.textView}>+</Text>
                </TouchableOpacity>
                <Text style={styles.textView}>{counterValue}</Text>
                <TouchableOpacity style={styles.buttonView} onPress={() => decrement()}>
                    <Text style={styles.textView}>-</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.ZeroView} onPress={() => Show()}>
                <Text style={styles.textView}>ReStart</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}


export default Controller;
