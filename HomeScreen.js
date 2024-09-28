import React, { useState } from "react";
import { Pressable, TouchableOpacity } from "react-native";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
} from "react-native";
import { Image, ImageBackground, Text, View } from "react-native";

const image = require("./assets/cyshop.jpg");

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <ScrollView>
      {loading && (
        <ActivityIndicator
          style={{ position: "absolute", alignSelf: "center", marginTop: 50 }}
          size="large"
          color="#0000ff"
        />
      )}
      <ImageBackground
        source={image}
        style={{ height: 200, width: "100%" }}
        onLoad={handleImageLoad}
        onLoadEnd={handleImageLoad}
        onError={() => setLoading(false)}
        resizeMode="cover"
      >
        <Text
          style={{
            textAlign: "center",
            marginTop: 80,
            color: "#fff",
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          Shop CyShop
        </Text>
      </ImageBackground>
      <KeyboardAvoidingView
        style={{ flex: 1, justifyContent: "center" }}
        behavior="padding"
      >
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "#000",
            padding: 10,
            margin: 20,
            borderRadius: 20,
          }}
          placeholder="Search Product"
        />
      </KeyboardAvoidingView>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <TouchableOpacity style={{width:80,height:80,backgroundColor:'#FFC300',marginLeft:10,borderRadius:10}}>
        <Image source={require('./assets/adidas.png')} style={{width:70,height:50, alignSelf:'center',marginTop:10}} />
      </TouchableOpacity>
      <TouchableOpacity style={{width:80,height:80,backgroundColor:'#FFC300',marginLeft:10,borderRadius:10}}>
        <Image source={require('./assets/nike.png')} style={{width:74,height:40, alignSelf:'center',marginTop:20}} />
      </TouchableOpacity>
      <TouchableOpacity style={{width:80,height:80,backgroundColor:'#FFC300',marginLeft:10,borderRadius:10}}>
        <Image source={require('./assets/vans.png')} style={{width:50,height:50, alignSelf:'center',marginTop:10}} />
      </TouchableOpacity>
      <TouchableOpacity style={{width:80,height:80,backgroundColor:'#FFC300',marginLeft:10,borderRadius:10}}>
        <Image source={require('./assets/sales.png')} style={{width:50,height:50, alignSelf:'center',marginTop:10}} />
      </TouchableOpacity>
      <TouchableOpacity style={{width:80,height:80,backgroundColor:'#FFC300',marginLeft:10,borderRadius:10}}>
        <Image source={require('./assets/cash.png')} style={{width:50,height:50, alignSelf:'center',marginTop:10}} />
      </TouchableOpacity>
      <TouchableOpacity style={{width:80,height:80,backgroundColor:'#FFC300',marginLeft:10,borderRadius:10}}>
        <Image source={require('./assets/envelop.png')} style={{width:50,height:50, alignSelf:'center',marginTop:10}} />
      </TouchableOpacity>
      <TouchableOpacity style={{width:80,height:80,backgroundColor:'#FFC300',marginLeft:10,borderRadius:10}}>
        <Image source={require('./assets/board.png')} style={{width:50,height:50, alignSelf:'center',marginTop:10}} />
      </TouchableOpacity>
    </ScrollView>
    <Text style={{ margin:20,fontFamily:'geeza pro',textAlign:'center',fontSize:17,fontWeight:'bold'}}>We saved these for you</Text>
    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
    <Pressable style={{width:150,height:150,marginLeft:20}}>
      <Image style={{width:170, height:80,alignSelf:'center',marginTop:30}} source={require('./assets/airfoce.png')}/>
      <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center',marginTop:5}}>Nike Airforce</Text>
      <Text style={{textAlign:'center',fontWeight:'bold'}}>$129.99</Text>
    </Pressable>
    <Pressable style={{width:150,height:150,marginRight:20}}>
    <Image style={{width:170, height:80,alignSelf:'center',marginTop:30}} source={require('./assets/airmax.png')}/>
    <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center',marginTop:5}}>Nike AirMax</Text>
      <Text style={{textAlign:'center',fontWeight:'bold'}}>$229.99</Text>
    </Pressable>

    </View>
    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
    <Pressable style={{width:150,height:150,marginLeft:20}}>
      <Image style={{width:170, height:80,alignSelf:'center',marginTop:30}} source={require('./assets/air.png')}/>
      <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center',marginTop:5}}>Nike Lowdunks</Text>
      <Text style={{textAlign:'center',fontWeight:'bold'}}>$449.99</Text>
    </Pressable>
    <Pressable style={{width:150,height:150,marginRight:20}}>
    <Image style={{width:170, height:80,alignSelf:'center',marginTop:30}} source={require('./assets/gazelle.png')}/>
    <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center',marginTop:5}}>Nike Gazelle</Text>
      <Text style={{textAlign:'center',fontWeight:'bold'}}>$159.99</Text>
    </Pressable>

    </View>

    <View style={{marginTop:20}}>
    <ImageBackground style={{width:'100%',height:120}} source={require('./assets/banner.jpg')}resizeMode="cover">
          <Text style={{fontWeight:'bold',marginLeft:60,marginTop:30,fontSize:25,color:'orange'}}>50% Off</Text>
          <Text style={{fontWeight:'bold',marginLeft:30,fontSize:20}}>Your First Purchase</Text>
    </ImageBackground>
    </View>

    </ScrollView>
  );
};

export default HomeScreen;
