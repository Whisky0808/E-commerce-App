import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Ionicons, SimpleLineIcons, MaterialCommunityIcons,Fontisto } from '@expo/vector-icons';
import styles from './productDetail.style'
import { SIZES,COLORS } from '../constants';



const ProductDetail = ({ navigation }) => {
  const [count, setCount] = useState(1)
  const increment = () => {
    setCount(count + 1);
  }
  const decrement = () => {
    if (count > 1)
      setCount(count - 1);
    else
      setCount(0)
  }
  return (
    <View style={styles.container}>

      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }}>
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>

      </View>
      <Image
        style={styles.img}
        source={{ uri: "https://my-first-app-ecommerce.s3.amazonaws.com/furniture_img/furniture_display_06.jpg" }} />
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>
            Product
          </Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$555.86</Text>
          </View>
        </View>

        <View style={styles.ratingRow}>
          <View style={styles.rating} >
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons
                key={index}
                name='star'
                size={24}
                color="gold"
              />
            ))}
            <Text style={[styles.ratingText, styles.ratingItem]}>(4.9)</Text>
          </View>
          <View style={styles.rating}>
            <TouchableOpacity onPress={() => increment()} style={styles.ratingItem}>
              <SimpleLineIcons
                name="plus"
                size={20}
              />
            </TouchableOpacity >

            <Text style={[styles.ratingText, styles.ratingItem]}>{count}</Text>

            <TouchableOpacity onPress={() => decrement()} style={styles.ratingItem}>
              <SimpleLineIcons
                name="minus"
                size={20}
              />
            </TouchableOpacity>

          </View>

        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.desContent}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur quod odio praesentium iure odit aliquid doloremque quibusdam unde veniam dolore. Esse eum id illum, odio ea harum praesentium repellat tempore.
            Asperiores facilis incidunt autem dolorum voluptatum ullam id a similique accusantium, nisi tempora eaque iusto dicta ipsum tempore fuga animi iste itaque suscipit, voluptate repudiandae, consequatur at quos ut. Maxime?
          </Text>
        </View>

        <View style={{marginBottom:SIZES.small}}>
          <View style={styles.location}>
            <View style={{flexDirection:"row"}}>
              <Ionicons name="location-outline" size={20}/>
              <Text> Dallas </Text>
            </View>

            <View style={{flexDirection:"row"}}>
              <MaterialCommunityIcons name="truck-delivery-outline" size={20}/>
              <Text> Free Delivery </Text>
            </View>
            
          </View>
        </View>

        <View style={styles.cartRow}>
          <TouchableOpacity onPress={()=>{}} style={styles.cartBtn}>
            <Text style={styles.cartTitle}>BUY NOW</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{}} style={styles.addCart}>
            <Fontisto name="shopping-bag" size={24} color={COLORS.lightWhite}></Fontisto>
          </TouchableOpacity>

          
        </View>

      </View>

    </View>
  )
}

export default ProductDetail

