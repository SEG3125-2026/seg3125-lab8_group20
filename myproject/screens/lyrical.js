import { globalStyles } from '../styles/global';
import { Text, View, Button, FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LyricalScreen(){
    const navigation = useNavigation();
    const pressHandler = () => {
        navigation.navigate('OurClasses')
    };
    return(
      <View style={globalStyles.container}>
                            <Button title='Back' onPress={pressHandler} />

                <Text style={globalStyles.bigTitleText}>What Students Will Learn</Text>
                <FlatList
                    data={[
                        {key: 'Lyrical Terminology'},
                        {key: 'Mind and Body Connection'},
                        {key: 'Floor exercises'},
                        {key: 'Spatial Awareness'},
                        {key: 'Musicality and coordination'}
                    ]}
                    renderItem={({item}) => <Text style={globalStyles.paragraph2}>{item.key}</Text>}
                    />
                <Text style={globalStyles.bigTitleText}>Class details</Text>
                <FlatList
                    data={[
                        {key: 'Age Group: 5-11'},
                        {key: 'Skill Level: Beginner - Intermediate'},
                        {key: 'Class length: 60 minutes'},
                        {key: 'Dress Code: Leotard and tights'}
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