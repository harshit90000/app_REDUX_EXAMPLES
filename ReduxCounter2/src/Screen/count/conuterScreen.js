import React, { useState } from 'react';
import {  TextInput, View, } from 'react-native';
import styles from './style';
import { useDispatch, useSelector } from 'react-redux';
import { dataValue } from '../../Redux/Action/counterAction';
import Controller from '../../Components/controller/controller';

const CounterScreen = () => {

  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  console.log(counter);

  return (
    <View style={styles.mainView}>
      <Controller counterValue={counter.count} />
      <TextInput value={counter} keyboardType="numeric" style={styles.inputData}
        onChangeText={(text) => dispatch(dataValue(text))} />
    </View>
  );
}
export default CounterScreen;