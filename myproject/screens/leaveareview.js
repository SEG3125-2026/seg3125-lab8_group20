import React, {useState} from 'react';
import { globalStyles } from '../styles/global';
import { StyleSheet, Text, View, Button, ScrollView, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';


export default function LeaveAReviewScreen(){
    const navigation = useNavigation();
    const pressHandler = () => {
        navigation.navigate('Home')
    };
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [rating, setRating] = useState('');
    const [comments, setComments] = useState('');

    return(
           <ScrollView>
               <View style={globalStyles.container}>
                   <Button title='Home' onPress={pressHandler} />
                   <Text style={globalStyles.paragraph}>Leave Us a Review</Text>
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
                <Text style={globalStyles.paragraph}>Rate Our Studio:
                    <Picker selectedValue={rating} onValueChange={(itemValue) => setRating(itemValue)} >
                            <Picker.Item  value=""  label=""/>
                            <Picker.Item  value="1"  label="1 star"/>
                            <Picker.Item  value="1.5" label="1.5 stars" />
                            <Picker.Item  value="2" label="2 stars" />
                            <Picker.Item  value="3" label="3 stars" />
                            <Picker.Item  value="3.5" label="3.5 stars" />
                            <Picker.Item  value="4" label="4 stars" />
                            <Picker.Item  value="4.5" label="4.5 stars" />
                            <Picker.Item  value="5" label="5 stars" />

                    </Picker>
                </Text>

                <TextInput
                    placeholder ="Enter any comments"
                    value={comments}
                    onChangeText={setComments}
                    style={globalStyles.input}
                />
                </View>
           </ScrollView>
    );

}