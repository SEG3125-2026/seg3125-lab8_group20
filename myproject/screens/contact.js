import React, {useState} from 'react';
import { globalStyles } from '../styles/global';
import { StyleSheet, Text, View, Button, ScrollView, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function ContactScreen(){
    const navigation = useNavigation();
    const pressHandler = () => {
        navigation.navigate('Home')
    };
    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [birthday,setBirthday] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [danceSpeed, setDanceSpeed] = useState('');
    const [experience, setExperience] = useState('');
    const [numOfClasses, setNumOfClasses] = useState('');

    return(
           <ScrollView>
               <View>
                   <Button title='Home' onPress={pressHandler} />
               </View>
               <View style={globalStyles.container}>
                           <Text style={globalStyles.bigTitleText}>Contact Us</Text>
                           <Text style={globalStyles.paragraph}>New to Dance? Please fill out the following form and we will contact you to help you get started on this amazing journey!</Text>
                               <TextInput
                                   placeholder="Enter your first name"
                                   value={fname}
                                   onChangeText={setFName}
                                   style={globalStyles.input}
                               />
                              <TextInput
                                  placeholder="Enter your last name"
                                  value={lname}
                                  onChangeText={setLName}
                                  style={globalStyles.input}
                              />
                              <TextInput
                                  placeholder="Enter your birthday"
                                  value={birthday}
                                  onChangeText={setBirthday}
                                  style={globalStyles.input}
                              />
                               <TextInput
                               placeholder="Enter your email"
                               value={email}
                               onChangeText={setEmail}
                               style={globalStyles.input}
                               />
                               <TextInput
                                   placeholder="Enter your phone number"
                                   value={phone}
                                   onChangeText={setPhone}
                                   style={globalStyles.input}
                               />
                                <TextInput
                                   placeholder="Enter your preferred dance speed "
                                   value={danceSpeed}
                                   onChangeText={setDanceSpeed}
                                   style={globalStyles.input}
                                 />
                                 <TextInput
                                      placeholder="Enter your previous dance/athletic experience "
                                      value={experience}
                                      onChangeText={setExperience}
                                      style={globalStyles.input}
                                 />
                                 <TextInput
                                       placeholder="Enter your preferred number of classes a week "
                                       value={numOfClasses}
                                       onChangeText={setNumOfClasses}
                                       style={globalStyles.input}
                                   />
                               <Button title="Submit Registration" onPress={() => {
                               if (!fname||!lname||!birthday||!email||!phone||!danceSpeed||!experience||!numOfClasses){
                                   alert("Please fill all fields");
                               } else{
                                   alert(`Sent!`);
                               }
                               }} />
                       </View>
           </ScrollView>
    );

}
