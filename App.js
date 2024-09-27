
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './SplashScreen';
import HomeScreen from './HomeScreen';
import { useEffect, useState } from 'react';

export default function App(){
const [isShowSplash, setIsShowSplash] = useState(true);

useEffect(()=>{
  setTimeout(()=>{
    setIsShowSplash(false);
  }, 3000)
});


  return <>{isShowSplash ? <SplashScreen />:<HomeScreen/>}</>;
};
