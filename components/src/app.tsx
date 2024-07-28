import React from "react";

import { View,Text,Image,StyleSheet,Linking } from "react-native";
import ButtonClick from "./Button";
import { ScrollView } from "react-native";
import RestaurantCards from "./RestaurantCards";
import Location from "./Location";
import { openURL } from "expo-linking";

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
    <View>
      <Location/>
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
<ButtonClick></ButtonClick>
</View>
<View style={homePage.cardContainerTwo}>
<Text style={homePage.headingrestro}>Top Restaurants</Text>
<ScrollView horizontal={true} style={homePage.cardContainer}>
<RestaurantCards/>
<RestaurantCards/>
<RestaurantCards/>
<RestaurantCards/>
<RestaurantCards/>
</ScrollView>
</View>
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
    marginBottom:10,
    alignSelf:"center",
  },
  imagestyle:{
    width: 100,
    height: 100,
    borderRadius:0,
    marginRight:100
  },
  bhojstyle:{
    width: 300,
    height: 300,
    borderRadius:40,
    marginRight:60
  },
  cardContainer:{
  flexDirection:"row"
  },
  cardContainerTwo:{
  flexDirection:"column"
  },
  headingrestro:{
    fontSize:20,
    fontWeight:"bold",
    color:"antiquewhite",
    margin:7
  },
 }
);
 

 export default App;