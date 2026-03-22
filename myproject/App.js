import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image} from 'react-native';

export default function App() {
  // const clickHandler = () => 

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textFont}>Dancing Through Life</Text>
          <View style={styles.buttonContainer}>
            <Button title='REGISTER'/> {/* add onPress={clickHandler} here after */}
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.imageContainer}>
              <Image source={require('./assets/Dance_studio_homepage.png')}
                     style={{height: 400 , width: 375, resizeMode: 'contain'}}/>
          </View>
          <Text style={styles.textFont}>Make life long friendships and memories by joining our dance studio. 
                New and experienced dancers are welcome, we would love to have you join us!</Text>
          <Text style={styles.textFont}>Please contact us if you are new to dance. 
                Please register for a class if you are an experienced dancer.</Text>
        </View>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#8A34B2',
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  boldText:{
    fontWeight: 'bold',
  },
  body:{
    backgroundColor: 'white',
    padding: 20,
  },
  buttonContainer: {
    fontFamily: 'ui-rounded',
    fontWeight: '400',
    //backgroundColor: '#fff'
  },
  textFont:{
    fontFamily: 'ui-rounded',
    fontWeight: '400',
    textAlign: 'center',
    padding: 15,
  },
  imageContainer:{
    flex:1,
    alignItems: 'center',
  }
});
