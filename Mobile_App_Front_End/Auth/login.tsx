import { resolvePreset } from '@babel/core';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: "red",
  },
  tinyLogo: {
    width: 100,
    height: 100,
    padding: 50,
    margin: 150
  },
});

class Login extends Component {

  state={
    value: ""
  }

  render() {
    return (
      <View style={Styles.container}>
        {/* <Image
          style={Styles.tinyLogo}
          source={require("../assets/images/auth/login_logo.png")}
        /> */}
         <TextInput
          style={{
            height: 40,
            borderColor: 'red',
            borderWidth: 1
          }}
          defaultValue="You can type in me"
          
        />
      </View>
    );
  }

}

export default Login;