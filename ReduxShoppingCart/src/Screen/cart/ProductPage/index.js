import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import Data from '../data';
import styles from './style';

const ProductPage = ({ route }) => {

  const id = route.params.courseId;

  const selectedCourse = Data.find((element) => {
    return id === element.id;
  });

  return (

    <ScrollView style={styles.mainScrollView} >
      <View style={styles.imageView}>
        <Image source={{ uri: selectedCourse.image }} style={styles.itemImage} />
      </View>

      <View style={styles.itemDetailView}>

        <Text style={styles.itemTitleText}>{selectedCourse.title}</Text>
        <View style={styles.textDirectionView}>
          <Text style={styles.itemHeadingText}>Category :</Text>
          <Text style={styles.itemDetailsText}> {selectedCourse.category}</Text>
        </View>
        <View style={styles.textDirectionView}>
          <Text style={styles.itemHeadingText}>Price :</Text>
          <Text style={styles.itemDetailsText}> {selectedCourse.price}$</Text>
        </View>
        <View style={styles.textDirectionView}>
          <Text style={styles.itemHeadingText}>Rate :</Text>
          <Text style={styles.itemDetailsText}> {selectedCourse.rating.rate}</Text>
        </View>
        <View style={styles.textDirectionView}>
          <Text style={styles.itemHeadingText}>Description :</Text>
          <Text style={styles.itemDescriptionText}>&nbsp;{`\n`}{selectedCourse.description}</Text>
        
        </View>
      </View>
    </ScrollView>

  );
}


export default ProductPage;
