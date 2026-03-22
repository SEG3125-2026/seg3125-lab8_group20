import { globalStyles } from '../styles/global';
import { Text, View, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ClassOverviewScreen(){
    const navigation = useNavigation();
    const pressHandler = () => {
        navigation.navigate('Home')
    };
    return(
            <View>
                <Text style={globalStyles.bigTitleText}>Explore Our Classes</Text>
                <View style={styles.layout}>
                    <Text onPress={() => navigation.navigate('Ballet')}>Ballet</Text>
                    <Text onPress={() => navigation.navigate('Tap')}>Tap</Text>
                    <Text onPress={() => navigation.navigate('Jazz')}>Jazz</Text>
                    <Text onPress={() => navigation.navigate('HipHop')}>Hip Hop</Text>
                    <Text onPress={() => navigation.navigate('Lyrical')}>Lyrical</Text>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    layout: {
      flex: 1,
      padding: 1,
      justifyContent: 'space-around',
    },
})