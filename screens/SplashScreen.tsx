import React, { useEffect, useState } from 'react';
import {Text, 
  View, 
  StyleSheet 
} from 'react-native';
import Lottie from 'lottie-react-native';

const SplashScreen = (props:any) => {
  const [authLoaded, setAuthLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAuthLoaded(true);
    }, 6000);
  }, []);

  useEffect(() => {
    if (authLoaded) {
      props.navigation.navigate('Login');
    }
  }, [authLoaded]);

  return (
    <View style={styles.root}>
      <Lottie source={require('../src/lottie/Elevate.json')} autoPlay loop />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
});


export default SplashScreen;