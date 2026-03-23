import { globalStyles } from '../styles/global';
import { Calendar } from 'react-native-calendars';
import { StyleSheet, Text, View, Button, ScrollView, Image, StatusBar, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ClassSchedulesScreen(){
    const navigation = useNavigation();
    const pressHandler = () => {
        navigation.navigate('Home')
    };
    return(
        <ScrollView>
            <View>
                <Button title='Home' onPress={pressHandler} />
            </View>
            <View style={globalStyles.container}>
                        <Text style={globalStyles.bigTitleText}>Class Schedule</Text>
                            <Calendar>
                            </Calendar>
                        </View>
        </ScrollView>
    )
}
