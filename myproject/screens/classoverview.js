import { globalStyles } from '../styles/global';
import { Text, View, Button, FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ClassOverviewScreen(){
    const navigation = useNavigation();
    const pressHandler = () => {
        navigation.navigate('Home')
    };
    return(
            <View style={globalStyles.container}>
                <Text style={globalStyles.bigTitleText}>Explore Our Classes</Text>
                <View>
                    <Text onPress={() => navigation.navigate('Ballet')}>Ballet</Text>
                    <Text onPress={() => navigation.navigate('Tap')}>Tap</Text>
                    <Text onPress={() => navigation.navigate('Jazz')}>Jazz</Text>
                    <Text onPress={() => navigation.navigate('Hiphop')}>Hip Hop</Text>
                    <Text onPress={() => navigation.navigate('Lyrical')}>Lyrical</Text>
                </View>
            </View>
    )
}