import * as React from 'react';
import { Navigation , TextInput} from './routes/homeStack';

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textFont}>Dancing Through Life</Text>
          <View style={styles.buttonContainer}>
            <Button title='REGISTER'/> {/* add onPress={clickHandler} here after */}
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.imageContainer}>
              <Image source={require('./assets/Dance_studio_homepage.png')}
                     style={{height: 400 , width: 375, resizeMode: 'contain'}}/>
          </View>
          <Text style={styles.textFont}>Make life long friendships and memories by joining our dance studio. 
                New and experienced dancers are welcome, we would love to have you join us!</Text>
          <Text style={styles.textFont}>Please contact us if you are new to dance. 
                Please register for a class if you are an experienced dancer.</Text>
          <Text style={styles.textFont}>Register for a Class</Text>
          <TextInput
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
          <TextInput
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
          <Button title="Submit Registration" onPress={() => alert(`Registered: ${name}, ${email}`)} />
        </View>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}