import React from 'react';
import { FlatList, Image, SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import styles from './style';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemtoCart } from '../../../Redux/Action/counterAction';

const CartPage = ({ navigation }) => {

    const dispatch = useDispatch()
    const item = useSelector(state => state)
    const removeItem = index => {
        dispatch(removeItemtoCart(index))
    }
    return (
        <SafeAreaView style={styles.mainView}>
            <FlatList data={item} style={styles.flatListMainView} showsVerticalScrollIndicator={false}
                ListEmptyComponent={<TouchableOpacity onPress={() => navigation.navigate("HomePage")}>
                    <Text style={styles.emptyListText}>Empty Cart</Text>
                </TouchableOpacity>}

                renderItem={({ item, index }) => (
                    <TouchableOpacity style={styles.flatListView} onPress={() => navigation.navigate("ProductPage", { courseId: item.id })} >
                        <Image source={{ uri: item.image }} style={styles.itemImage} />
                        <View style={styles.itemDetailView}>
                            <Text style={styles.titleText}>{item.title}</Text>
                            <Text style={styles.priceText}>{item.price}$</Text>
                            <TouchableOpacity style={styles.removeView} onPress={() => { removeItem(index) }}>
                                <Text style={styles.removeText}>Remove</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )} />
        </SafeAreaView>
    );
}

export default CartPage;
