import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {COLORS,SIZES} from "../constants/index"
import {Feather,Ionicons} from '@expo/vector-icons'
import styles from '../screens/search.styles'

const Search = () => {
  return (
    <SafeAreaView>
       <View style={styles.searchContainer}>
            <TouchableOpacity>
                <Ionicons name="camera-outline" size={SIZES.xLarge} style={styles.searchIcon}/>
            </TouchableOpacity>
            <View style={styles.searchWrapper}>
                <TextInput
                style={styles.searchInput}
                value=""
                onPressIn={()=>{}}
                placeholder="What are you looking for"
                />
            </View>
            <View>
                <TouchableOpacity style={styles.searchBtn}>
                    <Feather name="search" size={24} color={COLORS.offwhite}/>
                </TouchableOpacity>
            </View>
          </View>
    </SafeAreaView>
  )
}

export default Search;

