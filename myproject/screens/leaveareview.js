import React from 'react';
import { globalStyles } from '../styles/global';
import { StyleSheet, Text, View, Button, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function LeaveAReviewScreen(){
    const navigation = useNavigation();
    const pressHandler = () => {
        navigation.navigate('Home')
    };

    return(
           <ScrollView>
               <View>
                   <Button title='Home' onPress={pressHandler} />
               </View>
           </ScrollView>
    );

}
