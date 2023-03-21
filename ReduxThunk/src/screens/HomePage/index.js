import React, { useEffect, useState } from 'react';
import { View,Text,FlatList,Image,ActivityIndicator,TouchableOpacity} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getProduct } from '../../redux/actions';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

export default function HomePage() {
    const product = useSelector(state => state.userReducer.apple);
    const dispatch = useDispatch();
    const navigation = useNavigation()
    console.log(product, '----------IPhone------');
    useEffect(() => {
        dispatch(getProduct())
    }, []);
    return (
        <View style={styles.mainView}>

            <FlatList  data={product} style={styles.flatListMainView} showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    // <Text style={styles.emptyList}>Empty</Text>
                    <ActivityIndicator />
                }
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.flatListView} onPress={() => navigation.navigate("ProductPage", { courseId: item.id })}>
                        <Image source={{ uri: item.thumbnail }} style={styles.itemImage} />
                        <View style={styles.itemTextView}>
                            <Text style={styles.itemTitleText}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                )} />
        </View >
    );
};
