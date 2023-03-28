import React, { useState, useEffect } from 'react';
import { View, Image, Text, Dimensions, ScrollView, Modal, Pressable, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './style';
import ImageZoom from 'react-native-image-pan-zoom';
import { darkGrey, lightGrey } from '../../assets/constants';
import { Rating } from 'react-native-ratings';
import { close } from '../../assets/images';

const ProductPage = ({ route }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const { height, width } = Dimensions.get('window')
    const [CurrentIndex, setCurrentIndex] = useState(0)
    const product = useSelector(state => state.apiReducer.data.products)

    const id = route.params.courseId;
    // console.log(id);

    const DataManage = product.find((element) => {
        return id === element.id;
    });
    // console.log(DataManage);

    const photos = DataManage.images.map((image) => {
        // console.log(image)
        return (
            <Pressable key={image} onPress={() => setModalVisible(!modalVisible)}>
                <Image style={styles.photoView} source={{ uri: image }} />
            </Pressable>
        );
    })

    const Slider = DataManage.images.map((image, index) => {
        // console.log(image)
        return (
            <View style={styles.sliderView} key={image} onPress={() => handleClick(image)}>
                <Image style={{
                    width: CurrentIndex == index ? 100 : 50,
                    height: CurrentIndex == index ? 100 : 50,
                    resizeMode: "contain",
                    marginHorizontal: "15%"
                }} source={{ uri: image }} />
            </View>
        );
    })
    const scrollPhotos = DataManage.images.map((image) => {
        // console.log(image)
        return (
            <View key={image} style={{ position: 'relative' }}>
                {/* <Image style={styles.photoView} source={{ uri: image }} /> */}

                <ImageZoom cropWidth={390} cropHeight={400} panToMove={true} minScale={1} maxScale={4} imageHeight={350} imageWidth={400} >
                    <Image style={styles.modelSliderView} source={{ uri: image }} />
                </ImageZoom>
            </View>
        );
    })
    return (
        <SafeAreaView style={styles.mainView}>
            <ScrollView showsVerticalScrollIndicator={false} scrollEventThrottle={16}>

                <View style={styles.productImageView}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true} scrollEventThrottle={16}
                        onScroll={e => {
                            const x = e.nativeEvent.contentOffset.x;
                            setCurrentIndex((x / width).toFixed(0));
                        }}>
                        {photos}
                    </ScrollView>
                    <View style={styles.imageSliderView}>
                        {photos.map((item, index) => {
                            return (
                                <View style={{
                                    width: CurrentIndex == index ? 13 : 8,
                                    height: CurrentIndex == index ? 13 : 8,
                                    borderRadius: CurrentIndex == index ? 13 : 4,
                                    backgroundColor: CurrentIndex == index ? darkGrey : lightGrey,
                                    marginTop: CurrentIndex == index ? 1 : 4,
                                    marginLeft: 7,
                                }}>
                                </View>)
                        })}
                    </View>
                </View>

                <View style={styles.productDetailsView}>
                    <View style={styles.dataview}>
                        <Text style={styles.productHeadingText}>Name </Text>
                        <Text style={styles.productColumText}>:</Text>
                        <Text style={styles.productDescriptionText}>&nbsp;{DataManage.title}</Text>
                    </View>
                    <View style={styles.dataview}>
                        <Text style={styles.productHeadingText}>Brand </Text>
                        <Text style={styles.productColumText}>:</Text>
                        <Text style={styles.productDescriptionText}>{DataManage.brand}</Text>
                    </View>
                    <View style={styles.dataview}>
                        <Text style={styles.productHeadingText}>Category </Text>
                        <Text style={styles.productColumText}>:</Text>
                        <Text style={styles.productDescriptionText}>{DataManage.category}</Text>
                    </View>
                    <View style={styles.dataview}>
                        <Text style={styles.productHeadingText}>Description </Text>
                        <Text style={styles.productColumText}>:</Text>
                        <Text style={styles.productDescriptionText}>{DataManage.description}</Text>
                    </View>
                    <View style={styles.dataview}>
                        <Text style={styles.productHeadingText}>Price </Text>
                        <Text style={styles.productColumText}>:</Text>
                        <Text style={styles.productPriceText}>{DataManage.price}</Text>
                        <Text style={styles.productDollarText}>&nbsp;$</Text>
                    </View>
                    <View style={styles.dataview}>
                        <Text style={styles.productHeadingText}>Rating </Text>
                        <Text style={styles.productColumText}>:</Text>
                        <Text style={styles.productDescriptionText}>{DataManage.rating}</Text>
                    </View>
                    <Rating style={styles.ratingView} type="heart" ratingCount={5} readonly
                        // showRating={true}
                        // ratingColor='="red'
                        // startingValue ={Math.floor(DataManage.rating)}
                        startingValue={DataManage.rating}
                    />
                </View>

                <Modal animationType="fade" transparent={false} visible={modalVisible}>
                    <SafeAreaView>
                        <Pressable onPress={() => setModalVisible(!modalVisible)}>
                            <Image style={styles.imagesCross} source={close} />
                        </Pressable>
                        <View style={styles.scrollImagePage}>
                            <ScrollView style={styles.photoViewSlider} pagingEnabled={true} horizontal showsHorizontalScrollIndicator={false} scrollEventThrottle={10} nestedScrollEnabled={true} maximumZoomScale={5} minimumZoomScale={1}
                                onScroll={e => {
                                    const x = e.nativeEvent.contentOffset.x;
                                    setCurrentIndex((x / width).toFixed(0));
                                }} >
                                {scrollPhotos}
                            </ScrollView>
                            <View style={styles.imageSmallSliderView}>
                                {Slider}
                            </View>
                        </View>
                    </SafeAreaView>
                </Modal>

            </ScrollView>
        </SafeAreaView>
    );
}

export default ProductPage;
