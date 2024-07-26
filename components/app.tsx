import React from "react";

import { View,Text,Image,StyleSheet } from "react-native";
import ButtonClick from "./Button";
import { ScrollView } from "react-native";
import RestaurantCards from "./RestaurantCards";

 const App=()=>{

  const placeholderImage=require("./gg.png");
  const Yumiee=require("./yum.png");
return(
<ScrollView >
  <View style={homePage.container}>
<View style={homePage.innerBox}>
    <Image
          source={placeholderImage}
          style={homePage.imagestyle}
          />
    <Text
    style={homePage.textList}>
      Yeti Munch
    </Text>
      </View>   
      <View style={homePage.cusine}>

      <Image
          source={Yumiee}
          style={homePage.bhojstyle}
          /> 
           <Text
    style={homePage.SloganList}>
The Taste of Himalayas....
    </Text>
</View>
<ScrollView horizontal={true} style={homePage.cardContainer}>
<RestaurantCards/>
<RestaurantCards/>
<RestaurantCards/>
<RestaurantCards/>
<RestaurantCards/>
</ScrollView>
<ButtonClick></ButtonClick>
</View>   
</ScrollView>

)
 }


 const homePage=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "blueviolet",
    alignItems:"center",
   padding:10,
   justifyContent:"flex-start",
   rowGap:100
  },
  innerBox:{
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"row",

  },
  cusine:{
    flex:1,
    flexDirection:"column",
    alignItems:"center"
  }
,
  textList:{
    marginTop:20,
    color:"#ffffff",
    fontSize:20,
    fontStyle:'italic'
  },
  SloganList:{
    color:"#ffffff",
    fontSize:20,
    fontStyle:'italic',
    marginBottom:70,
    alignSelf:"center",
    paddingRight:70
  },
  imagestyle:{
    width: 100,
    height: 100,
    borderRadius:0,
    marginTop:10,
    marginRight:100
  },
  bhojstyle:{
    width: 300,
    height: 300,
    borderRadius:40,
    marginRight:60
  },
  cardContainer:{
  flex:1,
  flexDirection:"row"
  }
 })
 

 export default App;