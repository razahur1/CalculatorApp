import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import logo from './assets/calculator-icon.png';
import { colors } from './MyColors';

const IntroScreen = () => {
  return (
    <View style={styles.container}>
        <Image source={logo} style={styles.img}/>
        <Text style={styles.text}>My Calculator</Text>
    </View>
  )
}

export default IntroScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        height:'100%',
        width:'100%',
        backgroundColor: colors.yellow,
        alignItems:'center',
        justifyContent:'center',
    },
    img:{
        width:100,
        height:100,
    },
    text:{
        fontSize:30,
        color:colors.gray
    }
})