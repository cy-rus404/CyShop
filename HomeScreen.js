import React, { useState } from 'react'
import { ActivityIndicator, KeyboardAvoidingView, ScrollView, TextInput } from 'react-native'
import { Image, ImageBackground, Text ,View } from 'react-native'

const image = require('./assets/cyshop.jpg')

const HomeScreen = () => {
    const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <ScrollView>
        {loading && (
        <ActivityIndicator style={{position:'absolute',alignSelf:'center',marginTop:50}} size="large" color="#0000ff" />
      )}
        <ImageBackground source={image} style={{height:200,width:'100%'}} onLoad={handleImageLoad} onLoadEnd={handleImageLoad} onError={() => setLoading(false)} resizeMode='cover'>
            <Text style={{textAlign:'center',marginTop:80,color:'#fff',fontSize:30,fontWeight:'bold'}}>Shop CyShop</Text>
        </ImageBackground>
        <KeyboardAvoidingView style={{flex:1,justifyContent:'center'}}behavior='padding'>
            <TextInput style={{borderWidth:1,borderColor:'#000',padding:10,margin:20,borderRadius:20}} placeholder='Search Product'/>
        </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default HomeScreen
