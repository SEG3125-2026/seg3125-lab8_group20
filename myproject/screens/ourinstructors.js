import React, {useState} from 'react';
import { globalStyles } from '../styles/global';
import { StyleSheet, Text, View, Button, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Card, Title ,Paragraph } from 'react-native-paper';



export default function OurInstructorsScreen(){
    const navigation = useNavigation();
    const pressHandler = () => {
        navigation.navigate('Home')
    };
    const [showCindy, setShowCindy] = useState(false);
    const [showJanis, setShowJanis] = useState(false);
    const [showMarco, setShowMarco] = useState(false);
    const [showLily, setShowLily] = useState(false);
    const [showPenelope, setShowPenelope] = useState(false);



    return(
        <ScrollView>
            <View style={globalStyles.container}>
                <Button title='Home' onPress={pressHandler} />
                <Text style={globalStyles.bigTitleText}>
                    Our Instructors
                </Text>

                <Card>
                    <View style={styles.textStyle}>
                    <Card.Content>
                        <Title>Cindy</Title>
                    </Card.Content>
                    </View>
                    <Card.Cover source={require('../assets/balletTeacher.png')}/>
                    <View style={globalStyles.imageContainer}>
                    <Card.Actions>
                        <Button title='About' onPress={() => setShowCindy(!showCindy)}></Button>
                    </Card.Actions>
                       {showCindy && (
                            <Card.Content>
                                <Paragraph>
                                    Cindy is a professional ballet instructor with 10+ years of experience. She teaches ballet Monday nights, Wednesday nights, and Friday afternoons.
                                </Paragraph>
                            </Card.Content>
                        )}
                    </View>
                </Card>

                <Card>
                    <View style={styles.textStyle}>
                    <Card.Content>
                        <Title>Janis</Title>
                    </Card.Content>
                    </View>
                    <Card.Cover source={require('../assets/hiphopInstructor.png')}/>
                    <View style={globalStyles.imageContainer}>
                    <Card.Actions>
                        <Button title='About' onPress={() => setShowJanis(!showJanis)}></Button>
                    </Card.Actions>
                       {showJanis && (
                            <Card.Content>
                                <Paragraph>
                                    Janis is a professional hiphop instructor with 5 years of experience. She teaches hiphop Tuesday nights and Thursday nights.
                                </Paragraph>
                            </Card.Content>
                        )}
                    </View>
                </Card>

                <Card>
                    <View style={styles.textStyle}>
                    <Card.Content>
                        <Title>Marco</Title>
                    </Card.Content>
                    </View>
                    <Card.Cover source={require('../assets/jazzInstructor.png')}/>
                    <View style={globalStyles.imageContainer}>
                    <Card.Actions>
                        <Button title='About' onPress={() => setShowMarco(!showMarco)}></Button>
                    </Card.Actions>
                       {showMarco && (
                            <Card.Content>
                                <Paragraph>
                                    Marco is a professional jazz instructor with 15+ years of experience. He teaches jazz Monday nights, Wednesday mornings, and Saturday afternoons.
                                </Paragraph>
                            </Card.Content>
                        )}
                    </View>
                </Card>

                <Card>
                    <View style={styles.textStyle}>
                    <Card.Content>
                        <Title>Lily</Title>
                    </Card.Content>
                    </View>
                    <Card.Cover source={require('../assets/lyricalInstructor.png')}/>
                    <View style={globalStyles.imageContainer}>
                    <Card.Actions>
                        <Button title='About' onPress={() => setShowLily(!showLily)}></Button>
                    </Card.Actions>
                       {showLily && (
                            <Card.Content>
                                <Paragraph>
                                    Lily is a professional lyrical instructor with 2 years of experience. She teaches lyrical Tuesday nights, Friday nights, and Sunday mornings.
                                </Paragraph>
                            </Card.Content>
                        )}
                    </View>
                </Card>

                <Card>
                    <View style={styles.textStyle}>
                    <Card.Content>
                        <Title>Penelope</Title>
                    </Card.Content>
                    </View>
                    <Card.Cover source={require('../assets/tapInstructor.png')}/>
                    <View style={globalStyles.imageContainer}>
                    <Card.Actions>
                        <Button title='About' onPress={() => setShowPenelope(!showPenelope)}></Button>
                    </Card.Actions>
                       {showPenelope && (
                            <Card.Content>
                                <Paragraph>
                                    Penelope is a professional tap instructor with 7+ years of experience. She teaches tap Wednesday nights, Friday nights, and Sunday afternoons.
                                </Paragraph>
                            </Card.Content>
                        )}
                    </View>
                </Card>
            </View>
        </ScrollView>
    );

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
