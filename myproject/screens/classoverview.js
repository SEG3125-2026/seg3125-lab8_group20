import { globalStyles } from '../styles/global';
import { Text, View, StyleSheet, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ClassOverviewScreen(){
    const navigation = useNavigation();
    const pressHandler = () => {
        navigation.navigate('OurClasses')
    };
    return(
            <View style={styles.layout}>
                <Button title='Back' onPress={pressHandler} />

                <Text style={globalStyles.bigTitleText}>Explore Our Classes</Text>
                <View style={styles.layout2}>
                    <Text style={styles.textFormat} onPress={() => navigation.navigate('Ballet')}>Ballet</Text>
                    <Text style={styles.textFormat} onPress={() => navigation.navigate('Tap')}>Tap</Text>
                    <Text style={styles.textFormat} onPress={() => navigation.navigate('Jazz')}>Jazz</Text>
                    <Text style={styles.textFormat} onPress={() => navigation.navigate('HipHop')}>Hip Hop</Text>
                    <Text style={styles.textFormat} onPress={() => navigation.navigate('Lyrical')}>Lyrical</Text>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    layout: {
      flex: 1,
    },
    layout2: {
      flex: 1,
      justifyContent: 'space-around',
      flexDirection: 'column',
    },
    textFormat: {
      fontSize: 20,
      fontFamily: 'nunito',
      margin: 5,
    }
})