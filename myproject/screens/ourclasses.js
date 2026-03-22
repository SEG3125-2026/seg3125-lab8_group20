import { globalStyles } from '../styles/global';
import { Calendar } from 'react-native-calendars';
import { StyleSheet, Text, View, Button, ScrollView, Image, StatusBar, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function OurClassesScreen(){
    const navigation = useNavigation();
    const pressHandler = () => {
        navigation.navigate('Home')
    };
    return(
        <ScrollView>
            <View>
                <Text style={globalStyles.bigTitleText}>
                    Our Classes
                </Text>
            </View>
        </ScrollView>
    )

}