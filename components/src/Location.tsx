import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import React from 'react';

export default function Location() {
  return (
    <View style={styles.searchBox}>
     <TextInput 
     style={
      styles.inputbox
    } defaultValue='Enter your Location'/>
     <TouchableOpacity style={styles.button}>
      <Text
      style={styles.textbutton}>
        Enter
        </Text></TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  searchBox:{
   flexDirection:"row",
   justifyContent:"space-between",
   gap:4
  },
  inputbox:{
    height: 40,
    width:250,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor:"#ffffff",
    textAlign:"center",
    borderRadius:5,
    margin:2,
    fontStyle:"italic",
    fontSize:18

  },
  button:{
    height:40,
    borderWidth:1,
    borderColor:"gray",
    backgroundColor:"antiquewhite",
    width:70,
    color:"white",
    borderRadius:5,
    margin:2

  }
  ,
  textbutton:{
    color:"blueviolet",
    textAlign:"center",
     marginTop:6,
     fontSize:18,
     fontWeight:"bold"
  }
});