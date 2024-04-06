import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {SliderBox} from  'react-native-image-slider-box'
import { COLORS } from '../../constants'

const Carousel = () => {
    const slides = [
        "https://d3pg87jl5dip5b.cloudfront.net/furniture_img/furniture_display_06.jpg",
        "https://d3pg87jl5dip5b.cloudfront.net/furniture_img/furniture_display_01.jpg",
        "https://d3pg87jl5dip5b.cloudfront.net/furniture_img/furniture_display_04.jpg",
       
    ]
  return (
    <View style={styles.carouselContainer}>
        <SliderBox images={slides}
        dotColor = {COLORS.primary}
        inactiveDotColor = {COLORS.secondary}
        ImageComponentStyle = {{borderRadius:15,width:"93%",marginTop:15}}
        autoplay
        circleLoop
        />

      
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
    carouselContainer:{
        flex:1,
        alignItems:"center",
    }
})