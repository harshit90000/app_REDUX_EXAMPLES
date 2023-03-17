import React from 'react';
import { FlatList, Image, SafeAreaView, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Data from '../data';
import { addItemtoCart } from '../../../Redux/Action/cardUse/action';
import { cart } from '../../../assets/Image/image';


const HomePage = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const additem = item => {
        dispatch(addItemtoCart(item))
    }
    const items = useSelector(state => state)

    return (

        <SafeAreaView style={styles.mainView}>
            <View style={styles.headerView}>
                <Text style={styles.homePageText}>Home Page</Text>
                <TouchableOpacity style={styles.cartView} onPress={() => navigation.navigate("CartPage")}>
                    <Image style={styles.cartImage} source={cart} />
                    <Text style={styles.cartText}>{items.length} </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={Data} style={styles.flatListmainView} showsVerticalScrollIndicator={false}
                ListEmptyComponent={<Text style={styles.emptyListText}>Empty List</Text>}

                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.flatListView} onPress={() => navigation.navigate("ProductPage", { courseId: item.id })}>
                        <Image source={{ uri: item.image }} style={styles.itemImage} />
                        <View style={styles.itemDetailView}>
                            <Text style={styles.itemTitleText}>{item.title}</Text>
                            <TouchableOpacity style={styles.addToCartView} onPress={() => { additem(item) }}>
                                <Text style={styles.addToCartText}>Add To Cart</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )} />
        </SafeAreaView>
    );
}
export default HomePage;