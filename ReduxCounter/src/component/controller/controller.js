import React from 'react';
import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux'
import { incrementDecrementValue } from '../../redux/action/CounterAction';
import styles from './style';

const Controller = () => {

    const dispatch = useDispatch()

    const zero = () => {
        dispatch({ type: "0" })
    }

    const increment = () => {
        if (dispatch != '') {
            dispatch(incrementDecrementValue("increment"))
        }
    }

    const decrement = () => {
        if (dispatch != '') {
            dispatch(incrementDecrementValue("decrement"))
        }
    }

    return (
        <SafeAreaView>
            <View style={styles.mainView}>
                <TouchableOpacity onPress={() => decrement()}>
                    <Text style={styles.decrementStyle}>-</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => increment()}>
                    <Text style={styles.incrementStyle}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => zero()}>
                    <Text style={styles.zeroStyle}>Clear</Text>
                </TouchableOpacity>

            </View>
            
        </SafeAreaView>
    );
}


export default Controller;
