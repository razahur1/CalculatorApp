import { SafeAreaView,StyleSheet, Text, View } from 'react-native';
import React,{ useState } from 'react';
import MainScreen from './MainScreen';
import IntroScreen from './IntroScreen';
import { colors } from './MyColors';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  const [isloaded,setIsLoaded] = useState(false);

  setTimeout(()=>{
    setIsLoaded(true)
  }, 2000);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='default'/>
      {isloaded ? <MainScreen/> : <IntroScreen/>}
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    alignItems: 'center',
    
  }
})





