import { TouchableOpacity,StyleSheet, Text, View,Image} from 'react-native'
import React from 'react'
import styles from './productCardView.style'
import {Ionicons} from "@expo/vector-icons"
import {COLORS,SIZES} from '../../constants'
import {useNavigation} from '@react-navigation/native'

const ProductCardView = () => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("ProductDetail")}>
        <View style={styles.container}>
            <Image 
            source={{uri:"https://d3pg87jl5dip5b.cloudfront.net/furniture_img/furniture_display_06.jpg"}}
            style={styles.image}
            />
            <View style={styles.details}>
                <Text style={styles.title} numberOfLines={1}>Product</Text>
                <Text style={styles.supplier}>Product</Text>
                <Text style={styles.price}>$45</Text>
            </View>
            <TouchableOpacity style={styles.addBtn}>
                <Ionicons name="add-circle" size={35} color={COLORS.primary}/>
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
  )
}

export default ProductCardView

