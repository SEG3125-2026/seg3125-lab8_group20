import { globalStyles } from '../styles/global';
import { Text, View, Button, FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TapScreen(){
    const navigation = useNavigation();
    const pressHandler = () => {
        navigation.navigate('Home')
    };
    return(
      <View style={globalStyles.container}>
                <Text style={globalStyles.bigTitleText}>What Students Will Learn</Text>
                <FlatList
                    data={[
                        {key: 'Tap Terminology'},
                        {key: 'Balance and coordination'},
                        {key: 'Conditioning Exercises'},
                        {key: 'Rhythm and Flow'},
                        {key: 'Musicality'}
                    ]}
                    renderItem={({item}) => <Text style={globalStyles.paragraph2}>{item.key}</Text>}
                    />
                <Text style={globalStyles.bigTitleText}>Class details</Text>
                <FlatList
                    data={[
                        {key: 'Age Group: 12-17'},
                        {key: 'Skill Level: Intermediate - Advanced'},
                        {key: 'Class length: 60 minutes'},
                        {key: 'Dress Code: T-Shirt, tights, and tap shoes'}
                    ]}
                    renderItem={({item}) => <Text style={globalStyles.paragraph2}>{item.key}</Text>
                    }
                    />
                <Text style={globalStyles.bigTitleText}>Interested? Sign Up!</Text>
                <View>
                    <Button title='Sign Up' onPress={() => navigation.navigate('Register')}/>
                </View>
            </View>
    )
}