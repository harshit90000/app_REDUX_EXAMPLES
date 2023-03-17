import React, { useState } from 'react';
import { View, TextInput} from 'react-native';
import styles from './style';
import { useDispatch, useSelector } from 'react-redux';
import { dataValue } from  '../../redux/action/CounterAction'
import Count from '../../component/CounterValue/count';
import Controller from '../../component/controller/controller';

const CounterScreen = () => {

    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();

    console.log(counter);

    return (
        <View style={styles.mainView}>
            <Count counterValue={counter.count} />
            <Controller />
            <TextInput 
            value={counter}
            style={styles.textInput}
            onChangeText={(text) => dispatch(dataValue(text))}/>
        </View>
    );
}

export default CounterScreen;