import { globalStyles } from '../styles/global';
import { Text, View, Button, FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function JazzScreen(){
    const navigation = useNavigation();
    const pressHandler = () => {
        navigation.navigate('Home')
    };
    return(
      <View style={globalStyles.container}>
                <Text style={globalStyles.bigTitleText}>What Students Will Learn</Text>
                <FlatList
                    data={[
                        {key: 'Jazz Terminology'},
                        {key: 'Proper posture and alignment'},
                        {key: 'Rhythm and flexibility'},
                        {key: 'Duet dancing'},
                        {key: 'Musicality and coordination'}
                    ]}
                    renderItem={({item}) => <Text style={globalStyles.paragraph2}>{item.key}</Text>}
                    />
                <Text style={globalStyles.bigTitleText}>Class details</Text>
                <FlatList
                    data={[
                        {key: 'Age Group: 8-13'},
                        {key: 'Skill Level: Advanced'},
                        {key: 'Class length: 60 minutes'},
                        {key: 'Dress Code: Leotard, tights, and jazz shoes'}
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