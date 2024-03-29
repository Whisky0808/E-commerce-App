import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from "expo-splash-screen"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {BottomTabNavigation} from './navigation/BottomTabNavigation'


export default function App() {

  const Stack = createNativeStackNavigator();

  const[fontsLoaded] = useFonts({
    regular:require("./assets/fonts/Poppins-Regular.ttf"),
    bold:require("./assets/fonts/Poppins-Bold.ttf")
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
          name='Bottom Navigation'
          component={BottomTabNavigation}
          options={{headerShown:false}}

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
    // fontFamily:"Monaco",
    fontSize:10,
  }
});
