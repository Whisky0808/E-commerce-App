import { COLORS,SIZES } from "../../constants";
import { StyleSheet,View,Text } from "react-native";

const styles=StyleSheet.create({
    container:{
        marginTop:SIZES.medium,
        marginHorizontal:12,

    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between"

    },
    headerTitle:{
        fontFamily:"semibold",
        fontSize:SIZES.xLarge-2,

    }

})
export default styles
