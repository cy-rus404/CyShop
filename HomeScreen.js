import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
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
        <Image source={require('./assets/shop.png')} style={{width:50,height:50, alignSelf:'center',marginTop:10}} />
      </TouchableOpacity>
      <TouchableOpacity style={{width:80,height:80,backgroundColor:'#FFC300',marginLeft:10,borderRadius:10}}>
        <Image source={require('./assets/whatsapp.png')} style={{width:50,height:50, alignSelf:'center',marginTop:10}} />
      </TouchableOpacity>
      <TouchableOpacity style={{width:80,height:80,backgroundColor:'#FFC300',marginLeft:10,borderRadius:10}}>
        <Image source={require('./assets/fire.png')} style={{width:50,height:50, alignSelf:'center',marginTop:10}} />
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
    </ScrollView>
  );
};

export default HomeScreen;
