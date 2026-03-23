import React from 'react';
import { globalStyles } from '../styles/global';
import { StyleSheet, Text, View, Button, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Card, Title ,Paragraph } from 'react-native-paper';


export default function OurClassesScreen(){
    const navigation = useNavigation();
    const pressHandler = () => {
        navigation.navigate('Home')
    };
    return(
        <ScrollView>
            <View style={styles.container}>
                <Button title='Home' onPress={pressHandler} />
                <Text style={globalStyles.bigTitleText}>
                    Our Classes
                </Text>
                <Card>
                    <View style={styles.textStyle}>
                        <Card.Content>
                        <Title>Ballet</Title>
                    </Card.Content>
                    </View>
                    <Card.Cover source={require('../assets/ballet.png')}/>
                    <View style={globalStyles.imageContainer}>
                        <Card.Actions>
                        <Button title='About' onPress={() => navigation.navigate('Ballet')}></Button>
                    </Card.Actions>
                    </View>
                </Card>
                <Card>
                    <View style={styles.textStyle}>
                        <Card.Content>
                        <Title>Tap</Title>
                    </Card.Content>
                    </View>
                    <Card.Cover source={require('../assets/tap.png')}/>
                    <View style={globalStyles.imageContainer}>
                        <Card.Actions>
                        <Button title='About' onPress={() => navigation.navigate('Tap')}></Button>
                    </Card.Actions>
                    </View>
                </Card>
                <Card>
                    <View style={styles.textStyle}>
                        <Card.Content>
                        <Title>Lyrical</Title>
                    </Card.Content>
                    </View>
                    <Card.Cover source={require('../assets/lyrical.png')}/>
                    <View style={globalStyles.imageContainer}>
                        <Card.Actions>
                        <Button title='About' onPress={() => navigation.navigate('Lyrical')}></Button>
                    </Card.Actions>
                    </View>
                </Card>
                <Card>
                    <View style={styles.textStyle}>
                        <Card.Content>
                        <Title>Hip Hop</Title>
                    </Card.Content>
                    </View>
                    <Card.Cover source={require('../assets/hiphop.png')}/>
                    <View style={globalStyles.imageContainer}>
                        <Card.Actions>
                        <Button title='About' onPress={() => navigation.navigate('HipHop')}></Button>
                    </Card.Actions>
                    </View>
                </Card>
                <Card>
                    <View style={styles.textStyle}>
                        <Card.Content>
                        <Title>Jazz</Title>
                    </Card.Content>
                    </View>
                    <Card.Cover source={require('../assets/jazz.png')}/>
                    <View style={globalStyles.imageContainer}>
                        <Card.Actions>
                        <Button title='About' onPress={() => navigation.navigate('Jazz')}></Button>
                    </Card.Actions>
                    </View>
                </Card>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
      textStyle: {
        alignItems: 'center',
        fontSize: 20,
        padding: 10,
      },
      container: {
        padding: 20,
        justifyContent: 'space-around',
      }
    
    });