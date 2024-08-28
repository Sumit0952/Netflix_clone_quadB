import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  const scaleValue = new Animated.Value(1);

  useEffect(() => {
    Animated.timing(scaleValue, {
      toValue: 10,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      
      navigation.replace('Home');
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../Asset/splash.png')}
        style={[styles.logo, { transform: [{ scale: scaleValue }] }]}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;
