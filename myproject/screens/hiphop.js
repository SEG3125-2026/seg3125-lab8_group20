import { globalStyles } from '../styles/global';
import { Text, View, Button, FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HiphopScreen(){
    const navigation = useNavigation();
    const pressHandler = () => {
        navigation.navigate('Home')
    };
    return(
        <View>
            
        </View>
    )
}