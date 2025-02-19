import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { Redirect, Stack } from 'expo-router';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [isLogin, SetIsLogin] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 100);
  }, []);

  return (
    <>
      <Stack screenOptions={{headerShown:false}} />
      {isLogin ? <Redirect href="/(auth)" /> : <Redirect href="/(admin)" />}
    </>
  );
};

export default RootLayout;
