import React, { useState } from 'react';
import { globalStyles } from '../styles/global'
import { Text, View, Button, ScrollView,TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';


export default function RegisterScreen(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [classPicked, setClassPicked] = useState('');

    const navigation = useNavigation();
        const pressHandler = () => {
            navigation.navigate('Home')
    };

    return(
        <ScrollView>
        <View style={globalStyles.container}>
            <Button title='Home' onPress={pressHandler} />
            <Text style={globalStyles.paragraph}>Register for a Class</Text>
            <Text style={globalStyles.paragraph}>Note: You can only register for one class at a time.</Text>
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

                <Text style={globalStyles.paragraph}>Select a Class:
                    <Picker selectedValue={classPicked} onValueChange={(itemValue) => setClassPicked(itemValue)} >
                            <Picker.Item  value=""  label=""/>
                            <Picker.Item  value="mondayBallet"  label="Ballet : Monday Night"/>
                            <Picker.Item  value="wednesdayBallet" label="Ballet: Wednesday Night" />
                            <Picker.Item  value="fridayBallet" label="Ballet: Friday Afternoon" />
                            <Picker.Item  value="tuesdayHiphop" label="HipHop : Tuesday Night" />
                            <Picker.Item  value="thursdayHiphop" label="HipHop: Thursday Night" />
                            <Picker.Item  value="mondayJazz" label="Jazz: Monday Night" />
                            <Picker.Item  value="wednesdayJazz" label="Jazz : Wednesday Morning" />
                            <Picker.Item  value="saturdayJazz" label="Jazz: Saturday Afternoon" />
                            <Picker.Item  value="tuesdayLyrical" label="Lyrical: Tuesday Night" />
                            <Picker.Item  value="fridayLyrical" label="Lyrical : Friday Night" />
                            <Picker.Item  value="sundayLyrical" label="Lyrical: Sunday Morning" />
                            <Picker.Item  value="wednesdayTap" label="Tap: Wednesday Night" />
                            <Picker.Item  value="fridayTap" label="Tap : Friday Night" />
                            <Picker.Item  value="sundayTap" label="Tap: Sunday Afternoon" />
                    </Picker>
                </Text>

                <Button title="Submit Registration" onPress={() => {
                if (!name||!email||classPicked===''){
                    alert("Please fill all fields");
                } else{
                    alert(`${name} has been registered in ${classPicked}`);
                }
                }} />
        </View>
    </ScrollView>
    )
}