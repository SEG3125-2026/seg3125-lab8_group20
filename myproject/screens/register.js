import React, { useState } from 'react';
import { globalStyles } from '../styles/global'
import { Text, View, Button, ScrollView,TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function RegisterScreen(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const navigation = useNavigation();
        const pressHandler = () => {
            navigation.navigate('Home')
    };

    return(
        <ScrollView>
        <View style={globalStyles.container}>
            <Button title='Home' onPress={pressHandler} />
            <Text style={globalStyles.paragraph}>Register for a Class</Text>
                <TextInput
                placeholder="Enter your name"
                value={name}
                onChangeText={setName}
                style={globalStyles.input}
                />
                <TextInput
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                style={globalStyles.input}
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