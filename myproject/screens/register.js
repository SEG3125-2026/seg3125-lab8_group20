import React, { useState } from 'react';
import { globalStyles } from '../styles/global'
import { StyleSheet, Text, View, Button, ScrollView, Image, StatusBar, TextInput} from 'react-native';

export default function RegisterScreen(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    return(
        <ScrollView>
        <View style={globalStyles.container}>
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
    </ScrollView>
    )
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
    imageContainer:{
    flex:1,
    alignItems: 'center',
    },
});