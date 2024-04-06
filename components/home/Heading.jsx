import React from 'react'
import styles from './heading.style'
import { View, Text,TouchableOpacity} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import { COLORS,SIZES } from "../../constants";

const Heading = () => {
  return (
    <View style={styles.container}>
     <View style={styles.header}>
        <Text style={styles.headerTitle}>New Rivals</Text>
        <TouchableOpacity>
            <Ionicons name='logo-microsoft' size={24} color={COLORS.primary}></Ionicons>
        </TouchableOpacity>
     </View>
    </View>
  )
}

export default Heading