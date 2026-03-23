import React, { useState } from 'react';
import { globalStyles } from '../styles/global'
import { StyleSheet, Text, View, Button, ScrollView, Image, StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen(){
  const navigation = useNavigation();
  const pressHandlerRegister = () => navigation.navigate('Register');
  const pressHandlerContact = () => navigation.navigate('Contact');
  const pressHandlerClassSchedule = () => navigation.navigate('ClassSchedule');
  const pressHandlerOurClasses = () => navigation.navigate('OurClasses');
  const pressHandlerClassOverview= () => navigation.navigate('ClassOverview');
  const pressHandlerOurInstructors = () => navigation.navigate('OurInstructors');
  const pressHandlerLeaveAReview = () => navigation.navigate('LeaveAReview');


  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
         <View style={styles.buttonContainer}>
                    <Button title='CONTACT' onPress={pressHandlerContact}/>
         </View>
          <Text style={globalStyles.titleText}>Dancing Through Life</Text>
          <View style={styles.buttonContainer}>
            <Button title='REGISTER' onPress={pressHandlerRegister}/>
          </View>


        </View>
        <View style={styles.body}>
          <View style={styles.textStyle}>
            <Text style={globalStyles.paragraph} onPress={pressHandlerClassSchedule}>Class Schedule</Text>
            <Text style={globalStyles.paragraph} onPress={pressHandlerOurClasses}>Our Classes</Text>
            <Text style={globalStyles.paragraph} onPress={pressHandlerClassOverview}>Class Overview</Text>
            <Text style={globalStyles.paragraph} onPress={pressHandlerOurInstructors}>Our Instructors</Text>
            <Text style={globalStyles.paragraph} onPress={pressHandlerLeaveAReview}>Leave a Review</Text>

          </View>
          <View style={globalStyles.imageContainer}>
              <Image source={require('../assets/Dance_studio_homepage.png')}
                     style={{height: 400 , width: 375, resizeMode: 'contain'}}/>
          </View>
          <Text style={globalStyles.paragraph}>Make life long friendships and memories by joining our dance studio. 
                New and experienced dancers are welcome, we would love to have you join us!</Text>
          <Text style={globalStyles.paragraph}>Please contact us if you are new to dance. 
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
    textStyle:{
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 5,
      fontFamily: 'nunito',
    },
    body:{
      backgroundColor: 'white',
      padding: 20,
    },
    buttonContainer: {
      fontFamily: 'ui-rounded',
      fontWeight: '400',
    },
});