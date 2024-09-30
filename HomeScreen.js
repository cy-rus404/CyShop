import React, { useState } from "react";
import { Pressable, Modal, TouchableOpacity, SafeAreaView } from "react-native";
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

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView>
      {loading && (
        <ActivityIndicator
          style={{ position: "absolute", alignSelf: "center", marginTop: 50 }}
          size="small"
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
        <TouchableOpacity
          style={{
            width: 80,
            height: 80,
            backgroundColor: "#FFC300",
            marginLeft: 10,
            borderRadius: 10,
          }}
        >
          <Image
            source={require("./assets/adidas.png")}
            style={{
              width: 70,
              height: 50,
              alignSelf: "center",
              marginTop: 10,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 80,
            height: 80,
            backgroundColor: "#FFC300",
            marginLeft: 10,
            borderRadius: 10,
          }}
        >
          <Image
            source={require("./assets/nike.png")}
            style={{
              width: 74,
              height: 40,
              alignSelf: "center",
              marginTop: 20,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 80,
            height: 80,
            backgroundColor: "#FFC300",
            marginLeft: 10,
            borderRadius: 10,
          }}
        >
          <Image
            source={require("./assets/vans.png")}
            style={{
              width: 50,
              height: 50,
              alignSelf: "center",
              marginTop: 10,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 80,
            height: 80,
            backgroundColor: "#FFC300",
            marginLeft: 10,
            borderRadius: 10,
          }}
        >
          <Image
            source={require("./assets/prada.png")}
            style={{
              width: 50,
              height: 50,
              alignSelf: "center",
              marginTop: 10,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 80,
            height: 80,
            backgroundColor: "#FFC300",
            marginLeft: 10,
            borderRadius: 10,
          }}
        >
          <Image
            source={require("./assets/cash.png")}
            style={{
              width: 50,
              height: 50,
              alignSelf: "center",
              marginTop: 10,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 80,
            height: 80,
            backgroundColor: "#FFC300",
            marginLeft: 10,
            borderRadius: 10,
          }}
        >
          <Image
            source={require("./assets/envelop.png")}
            style={{
              width: 50,
              height: 50,
              alignSelf: "center",
              marginTop: 10,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 80,
            height: 80,
            backgroundColor: "#FFC300",
            marginLeft: 10,
            borderRadius: 10,
          }}
        >
          <Image
            source={require("./assets/board.png")}
            style={{
              width: 50,
              height: 50,
              alignSelf: "center",
              marginTop: 10,
            }}
          />
        </TouchableOpacity>
      </ScrollView>
      <Text
        style={{
          margin: 20,
          fontFamily: "geeza pro",
          textAlign: "center",
          fontSize: 17,
          fontWeight: "bold",
        }}
      >
        We saved these for you
      </Text>
                                                                                {/* SHOES */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Pressable
          onPress={() => setModalVisible(true)}
          style={{ width: 150, height: 150, marginLeft: 20 }}
        >
                                                                                 {/* NIKE AIRFORCE */}
          <Image
            style={{
              width: 170,
              height: 80,
              alignSelf: "center",
              marginTop: 30,
            }}
            source={require("./assets/airfoce.png")}
          />
          <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(true)} 
          >
                                                                                      {/* MODAL */}
            <View style={{backgroundColor:'beige', flex:1}}>
            <Pressable onPress={() => setModalVisible(false)}>
              <SafeAreaView>
              <Text style={{ margin:20,fontWeight:'bold',fontSize:15 }}>Close</Text>
              </SafeAreaView>
            </Pressable>
            <Image style={{width:350,height:155,marginTop:30}} source={require('./assets/airfoce.png')}/>
            <Text style={{textAlign:'center',margin:20,fontSize:30,fontWeight:'bold'}}>Nike Air Force 1</Text>
            <Text style={{margin:20,fontWeight:'bold'}}>Sizes</Text>
            <View style={{flexDirection:'row'}}>
                  <View style={{height:50,width:150,borderColor:'#000', borderWidth:1,marginLeft:40,}}> 
                <Text style={{textAlign:'center',fontSize:30,fontWeight:'bold',marginTop:5}}>Large</Text>
                </View>
                <View style={{height:50,width:150,borderColor:'#000', borderWidth:1,marginLeft:20,}}> 
                <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold',marginTop:10}}>Medium</Text>
                </View>
                
            </View>
            <View style={{flexDirection:'row',marginTop:30}}>
                  <View style={{height:50,width:150,borderColor:'#000', borderWidth:1,marginLeft:40,}}> 
                <Text style={{textAlign:'center',fontSize:15,fontWeight:'bold',marginTop:15}}>Small</Text>
                </View>
                <View style={{height:50,width:150,borderColor:'#000', borderWidth:1,marginLeft:20,}}> 
                <Text style={{textAlign:'center',fontSize:25,fontWeight:'bold',marginTop:8}}>Medium</Text>
                </View>
                
            </View>
            <View style={{flexDirection:'row',marginTop:30}}>
                  <View style={{height:50,width:150,borderColor:'#000', borderWidth:1,marginLeft:40,}}> 
                <Text style={{textAlign:'center',fontSize:30,fontWeight:'bold',marginTop:5}}>Large</Text>
                </View>
                <View style={{height:50,width:150,borderColor:'#000', borderWidth:1,marginLeft:20,}}> 
                <Text style={{textAlign:'center',fontSize:25,fontWeight:'bold',marginTop:8}}>Medium</Text>
                </View>
                
            </View>
            <View style={{flexDirection:'row',marginTop:180,marginLeft:40}}>
                <TouchableOpacity style={{width:60,height:50,backgroundColor:'beige',borderWidth:2,borderRadius:10}}>
                  <Image style={{width:30,height:30,alignSelf:'center',marginTop:8}} source={require('./assets/shopping-cart.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={{width:230,height:50,backgroundColor:'beige',borderWidth:2,borderRadius:10,marginLeft:10}}>
                  <Text style={{textAlign:'center',fontSize:25,marginTop:5}}>Add To Cart</Text>
                </TouchableOpacity>

            </View>
            </View>
            
          </Modal>

          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
              marginTop: 5,
            }}
          >
            Nike Airforce
          </Text>
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            $129.99
          </Text>
        </Pressable>




                                                                                    {/* AIRMAX */}




     <Pressable onPress={() => setModalVisible(true)}
          style={{ width: 150, height: 150, marginRight: 30 }}
        >
                                                                                  {/* AIRMAX IMAGE */}
          <Image
            style={{
              width: 170,
              height: 80,
              alignSelf: "center",
              marginTop: 30,
            }}
            source={require("./assets/airmax.png")}
          />
          <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(true)} 
          >
                                                                                      {/* MODAL */}
            <View style={{backgroundColor:'beige', flex:1}}>
            <Pressable onPress={() => setModalVisible(false)}>
              <SafeAreaView>
              <Text style={{ margin:20,fontWeight:'bold',fontSize:15 }}>Close</Text>
              </SafeAreaView>
            </Pressable>
                                                                                      {/* SIZES */}


            <Image style={{width:350,height:155,marginTop:30}} source={require('./assets/airfoce.png')}/>
            <Text style={{textAlign:'center',margin:20,fontSize:30,fontWeight:'bold'}}>Nike Air Force 1</Text>
            <Text style={{margin:20,fontWeight:'bold'}}>Sizes</Text>
            <View style={{flexDirection:'row'}}>
                  <View style={{height:50,width:150,borderColor:'#000', borderWidth:1,marginLeft:40,}}> 
                <Text style={{textAlign:'center',fontSize:30,fontWeight:'bold',marginTop:5}}>Large</Text>
                </View>
                <View style={{height:50,width:150,borderColor:'#000', borderWidth:1,marginLeft:20,}}> 
                <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold',marginTop:10}}>Medium</Text>
                </View>
                
            </View>
            <View style={{flexDirection:'row',marginTop:30}}>
                  <View style={{height:50,width:150,borderColor:'#000', borderWidth:1,marginLeft:40,}}> 
                <Text style={{textAlign:'center',fontSize:15,fontWeight:'bold',marginTop:15}}>Small</Text>
                </View>
                <View style={{height:50,width:150,borderColor:'#000', borderWidth:1,marginLeft:20,}}> 
                <Text style={{textAlign:'center',fontSize:25,fontWeight:'bold',marginTop:8}}>Medium</Text>
                </View>
                
            </View>
            <View style={{flexDirection:'row',marginTop:30}}>
                  <View style={{height:50,width:150,borderColor:'#000', borderWidth:1,marginLeft:40,}}> 
                <Text style={{textAlign:'center',fontSize:30,fontWeight:'bold',marginTop:5}}>Large</Text>
                </View>
                <View style={{height:50,width:150,borderColor:'#000', borderWidth:1,marginLeft:20,}}> 
                <Text style={{textAlign:'center',fontSize:25,fontWeight:'bold',marginTop:8}}>Medium</Text>
                </View>
                
            </View>
            <View style={{flexDirection:'row',marginTop:180,marginLeft:40}}>
                <TouchableOpacity style={{width:60,height:50,backgroundColor:'beige',borderWidth:2,borderRadius:10}}>
                  <Image style={{width:30,height:30,alignSelf:'center',marginTop:8}} source={require('./assets/shopping-cart.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={{width:230,height:50,backgroundColor:'beige',borderWidth:2,borderRadius:10,marginLeft:10}}>
                  <Text style={{textAlign:'center',fontSize:25,marginTop:5}}>Add To Cart</Text>
                </TouchableOpacity>

            </View>
            </View>
            
          </Modal>

          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
              marginTop: 5,
            }}
          >
            Nike AirMax
          </Text>
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            $109.99
          </Text>
        </Pressable>





      </View>
    </ScrollView>
  );
};

export default HomeScreen;
