import React, { useState } from 'react';
import { globalStyles } from '../styles/global'
import { StyleSheet, Text, View, Button, ScrollView, Image, StatusBar, TextInput} from 'react-native';

export default function HomeScreen({ navigation }){
const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={globalStyles.titleText}>Dancing Through Life</Text>
          <View style={styles.buttonContainer}>
            <Button title='REGISTER' onPress={() => alert('Scroll down to register')}/> 
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.imageContainer}>
              <Image source={require('../assets/Dance_studio_homepage.png')}
                     style={{height: 400 , width: 375, resizeMode: 'contain'}}/>
          </View>
          <Text style={globalStyles.paragraph}>Make life long friendships and memories by joining our dance studio. 
                New and experienced dancers are welcome, we would love to have you join us!</Text>
          <Text style={globalStyles.paragraph}>Please contact us if you are new to dance. 
                Please register for a class if you are an experienced dancer.</Text>
          <Text style={globalStyles.paragraph}>Register for a Class</Text>
          <TextInput
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
          <TextInput
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
          <Button title="Submit Registration" onPress={() => {
            if (!name||!email){
              alert("Please fill all fields");
            } else{
              alert(`Registered: ${name}, ${email}`);
            }
          }} />
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
    body:{
      backgroundColor: 'white',
      padding: 20,
    },
    buttonContainer: {
      fontFamily: 'ui-rounded',
      fontWeight: '400',
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
  },
  input:{
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  }
});