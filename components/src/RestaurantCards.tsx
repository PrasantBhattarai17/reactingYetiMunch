import { StyleSheet, Text, View,Image, Pressable } from 'react-native';
import React from 'react'

export default function RestaurantCards() {
    const Yumiee=require("./yum.png");
  return (
    <View style={styles.aCard}>
        <View style={styles.imagedummy}>
        <Image
          source={Yumiee}
          style={styles.imagedummy}
          /> 
        </View>
        <Text style={styles.normal_Text}>Thakali Kitchen</Text>
        <Text style={styles.remainText}>Location</Text>
        <Text style={styles.remainText}>cusines_1,Cusines_2</Text>
        <Text style={styles.remainText}>Rating</Text>
        <Pressable style={styles.pressvisit}>
          <Text   style={styles.textbutton}>Visit us</Text>
        </Pressable>
    </View>
  )
};

const styles = StyleSheet.create({
aCard:{

flex:1,
alignItems:"center",
backgroundColor:"antiquewhite",
width:250,
height:350,
margin:5,
borderRadius:5,
},
imagedummy:{
    margin:4,
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center",
    height:200,
    width:200,
    backgroundColor:"black"
},
normal_Text:{
margin:2,
fontWeight:"bold",
fontSize:16,
},
remainText:{
    fontStyle:"italic",
    fontSize:16,
},
pressvisit:{
  height:40,
  width:80,
  backgroundColor:"blueviolet",
  flexDirection:"column",
  justifyContent:"center",
  marginTop:6,
  borderRadius:5,
  elevation:20,
  shadowColor:"#171717"
},
textbutton:{
  color:"white",
  textAlign:"center",
   fontSize:18,
   fontWeight:"bold",
}
});