import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from "expo-splash-screen"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNav from './navigation/BottomTabNav';
import {Cart,} from './screens/index'


const Stack = createNativeStackNavigator();
export default function App() {

  const[fontsLoaded] = useFonts({
    regular:require("./assets/fonts/Poppins-Regular.ttf"),
    bold:require("./assets/fonts/Poppins-Bold.ttf"),
    extrabold:require("./assets/fonts/Poppins-ExtraBold.ttf"),
    light:require("./assets/fonts/Poppins-Light.ttf"),
    medium:require("./assets/fonts/Poppins-Medium.ttf"),
    semibold:require("./assets/fonts/Poppins-SemiBold.ttf")


  })

  const onLayoutRootView = useCallback(async()=>{
    if(fontsLoaded){
      await SplashScreen.hideAsync();
    }
  },[fontsLoaded]);

  if(!fontsLoaded){
    return null;
  }

  return (
    
    <>
    {/* <View style={styles.container}>
      <Text style={styles.textStyle}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View> */}

    <NavigationContainer>
      <Stack.Navigator>
      

       <Stack.Screen
       name="Bottom Navigation"
       component={BottomTabNav}
       options = {{headerShown:false}}
       />
       <Stack.Screen
       name="Cart"
       component={Cart}
       options = {{headerShown:false}}
       />
      </Stack.Navigator>
    </NavigationContainer>

    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle:{
    fontFamily:"bold",
    fontSize:20,
  }
});
