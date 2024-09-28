import React, { useState } from "react";
import { Pressable, Modal, TouchableOpacity } from "react-native";
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
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{ width: 150, height: 150, marginLeft: 20 }}
        >
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
            onRequestClose={() => setModalVisible(true)} // Close modal on back button press
          >
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={{ marginTop: 50 }}>Close</Text>
            </TouchableOpacity>
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
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{ width: 150, height: 150, marginRight: 20 }}
        >
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
            onRequestClose={() => setModalVisible(true)} // Close modal on back button press
          >
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={{ marginTop: 50 }}>Close</Text>
            </TouchableOpacity>
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
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
};

export default HomeScreen;
