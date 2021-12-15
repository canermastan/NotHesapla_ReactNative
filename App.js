/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
  Chip,
  Button,
  ThemeProvider,
  Header,
  Input,
} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
const image = {
  uri: 'https://www.ozlemfm.net/wp-content/uploads/2013/05/soft-background-sof.jpg', // BACKGROUND
};

const App = () => {

  const [not, setNot] = useState();
  const [harfNotu, setHarfNotu] = useState('')
  const [vize, setVize] = useState(0);
  const [final, setFinal] = useState(0);


  function handleCalculate() {
    if (vize <= 100 && vize >= 0 && final <= 100 && final >= 0) {
      sonuc = vize * 0.4 + final * 0.6
      setNot(sonuc);

      if (sonuc >= 85) setHarfNotu('AA')
      else if (sonuc >= 75 && sonuc < 85) setHarfNotu('BA')
      else if (sonuc >= 65 && sonuc < 75) setHarfNotu('BB')
      else if (sonuc >= 57 && sonuc < 65) setHarfNotu('CB')
      else if (sonuc >= 50 && sonuc < 57) setHarfNotu('CC')
      else if (sonuc >= 40 && sonuc < 50) setHarfNotu('DC')
      else if (sonuc >= 30 && sonuc < 40) setHarfNotu('FD')
      else if (sonuc >= 0 && sonuc < 30) setHarfNotu('FF')

    } else {
      setNot('Notları doğru giriniz');
      setHarfNotu('')
    }
  }

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.title}>Not Hesapla</Text>
        <Input
          placeholder="Vize Notunuz"
          leftIcon={{type: 'font-awesome', name: 'chevron-right'}}
          onChangeText={value => setVize(value)}
        />
        <Input
          placeholder="Final Notunuz"
          leftIcon={{type: 'font-awesome', name: 'chevron-right'}}
          onChangeText={value => setFinal(value)}
        />

        <Chip
          title="Hesapla"
          onPress={() => handleCalculate()}
          ViewComponent={LinearGradient} // Don't forget this!
          linearGradientProps={{
            colors: ['red', 'pink'],
            start: {x: 0, y: 0.5},
            end: {x: 1, y: 0.5},
          }}
        />

        <Text style={styles.text}>Notunuz</Text>
        <Text style={styles.text}>{not}</Text>
        <Text style={styles.text}>{harfNotu}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 50,
    color: '#212121',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 75,
  },

  text: {
    fontSize: 40,
    color: '#212121',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 0.3,
  },
  chip: {
    size: 20,
    marginLeft: 15,
  },
  image: {
    flex: 1,
  },
});

export default App;
