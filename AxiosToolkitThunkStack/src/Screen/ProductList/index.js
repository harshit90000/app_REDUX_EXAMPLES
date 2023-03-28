import React, { useEffect } from 'react';
import { Text, ActivityIndicator, ScrollView, View, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, myAxiosData } from '../../redux/ApiReducer';
import styles from './styles';

const ProductList = ({ navigation }) => {

    const product = useSelector(state => state.apiReducer.data.products)
    console.log(product, '----------IPhone------');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(myAxiosData())
    }, [])

    return (
        <SafeAreaView style={styles.mainView}>
            <FlatList data={product} showsVerticalScrollIndicator={false}
                ListEmptyComponent={<ActivityIndicator />}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.flatListView} onPress={() => navigation.navigate("ProductPage", { courseId: item.id })}>
                        <Image source={{ uri: item.thumbnail }} style={styles.itemImage} />
                        <View style={styles.itemTextView}>
                            <Text style={styles.itemTitleText}>{item.title}</Text>
                            <Text style={styles.itemPriceText}>{item.price + '$'}</Text>
                        </View>
                    </TouchableOpacity>
                )} />
        </SafeAreaView >

        // <ScrollView style={styles.mainView} showsVerticalScrollIndicator={false} >
        //     {product && product.map((item, i) => (
        //         <TouchableOpacity style={styles.flatListView} key={item.id}
        //             onPress={() => navigation.navigate("ProductPage", { courseId: item.id })}>
        //                 <Image source={{ uri: item.thumbnail }} style={styles.itemImage} />
        //             <View style={styles.itemTextView}>
        //                 <Text style={styles.itemTitleText}>{item.title}</Text>
        //             </View>
        //         </TouchableOpacity>
        //     ))}
        // </ScrollView>
    );
}


export default ProductList;
