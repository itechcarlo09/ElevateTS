import React, { useEffect, useState } from 'react';
import {Text, View, Button} from 'react-native';

const LoginScreen = (props:any) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
      }}>
      <Text >Hello, world!</Text>
      <Button
        title="Go to Details"
        onPress={() => props.navigation.navigate('Splash')}
      />
    </View>
  );
};

export default LoginScreen;