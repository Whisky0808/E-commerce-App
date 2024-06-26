import { StyleSheet } from "react-native"
import {COLORS,SIZES} from "../constants/index"
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    upperRow:{
        marginHorizontal:20,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        position:"absolute",
        top:SIZES.xxLarge,
        width:SIZES.width-44,
        zIndex:999,

    },
    img:{
        aspectRatio:1,
        resizeMode:"cover",
    },
    details:{
        marginTop:-SIZES.large,
        backgroundColor:COLORS.lightWhite,
        width:SIZES.width,
        borderTopLeftRadius:SIZES.medium,
        borderTopRightRadius:SIZES.medium,
    },
    titleRow:{
        marginHorizontal:20,
        paddingBottom:SIZES.small,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:SIZES.width-44,
        top:20,
    },
    ratingRow:{
        paddingBottom:SIZES.small,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:SIZES.width-10,
        top:5,
        // height:"100%"
    },
    rating:{
        top:SIZES.large,
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        marginHorizontal:SIZES.large,
        
    },
    ratingItem:{
        // marginHorizontal:4,
    },
    cartRow:{
        paddingBottom:SIZES.small,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:SIZES.width ,
    },
    cartBtn:{
        width:SIZES.width*0.7,
        backgroundColor:COLORS.black,
        padding:SIZES.small/2,
        borderRadius:SIZES.large,
        marginLeft:12,
    },
    titleRow:{
        marginHorizontal:20,
        paddingBottom:SIZES.small,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:SIZES.width-44,
        top:20,
    },
    
    ratingText:{
        color:COLORS.gray,
        fontFamily:"medium",
        marginHorizontal:4,
    },
    descriptionWrapper:{
        marginTop:SIZES.large*2,
        marginHorizontal:SIZES.large,

    },
    description:{
        fontFamily:"medium",
        fontSize:SIZES.large-2,
    },
    desContent:{
        fontFamily:"regular",
        fontSize:SIZES.small,
        textAlign:"justify",
        marginBottom:SIZES.small
    },
    location:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItem:"center",
        backgroundColor:COLORS.secondary,
        marginHorizontal:12,
        padding:5,
        borderRadius:SIZES.large
    },
    title:{
        fontFamily:"bold",
        fontSize:SIZES.large,
        
    },
    cartTitle:{
        marginLeft:SIZES.small,
        fontFamily:"semibold",
        fontSize:SIZES.medium,
        color:COLORS.lightWhite
        
    },
    addCart:{
        width:37,
        height:37,
        borderRadius:50,
        margin:SIZES.small,
        backgroundColor:COLORS.black,
        //水平
        alignItems:"center",
        //vertical
        justifyContent:"center"
        


    },
    price:{
        paddingHorizontal:10,
        fontFamily:"bold",
        fontSize:SIZES.large,
    },
    priceWrapper:{
        backgroundColor:COLORS.secondary,
        borderRadius:SIZES.large,
    }

})
export default styles;