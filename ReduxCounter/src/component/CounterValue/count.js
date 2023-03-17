import React from 'react';
import styles from './style';
import {Text,View,SafeAreaView} from 'react-native';

const Count = ({counterValue}) => {
    return (
        <SafeAreaView>
            <View style={styles.mainView}> 
                    <Text style={styles.textView}>{counterValue}</Text>
            </View>
        </SafeAreaView>
    );
}
export default Count;