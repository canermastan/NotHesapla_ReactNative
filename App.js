/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';

import {
  Chip,
  Input,
} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import returnLetterGrade from './letterGrade';

const App = () => {
  // Grade:not, Midterm:vize, Letter Grade: harf notu
  const [grade, setGrade] = useState();
  const [letterGrade, setLetterGrade] = useState('');
  const [midterm, setMidterm] = useState(0);
  const [final, setFinal] = useState(0);
  const [gecmeNotu, setGecmeNotu] = useState(45);
  let result;

  function handleCalculate() {
    if (midterm != 0 || final != 0){
      if (midterm <= 100 && midterm >= 0 && final <= 100 && final >= 0) {
        result = midterm * 0.4 + final * 0.6
        setGrade(result)
  
        setLetterGrade(returnLetterGrade(gecmeNotu, result)) 
  
      } else {
        setGrade('Notları doğru giriniz')
        setLetterGrade('')
      } 
    }
    else{
      setGrade('')
      setLetterGrade('')
    }
  }

  return (
    <ImageBackground source={require('./src/assets/images/background.jpg')} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.title}>Not Hesapla</Text>
        <Input
          placeholder="Vize Notunuz"
          leftIcon={{type: 'font-awesome', name: 'chevron-right'}}
          onChangeText={value => setMidterm(value)}
        />
        <Input
          placeholder="Final Notunuz"
          leftIcon={{type: 'font-awesome', name: 'chevron-right'}}
          onChangeText={value => setFinal(value)}
        />

        <Chip
          style={{marginLeft:15,marginRight:15}}
          title="Hesapla"
          onPress={() => handleCalculate()}
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: ['red', 'pink'],
            start: {x: 0, y: 0.5},
            end: {x: 1, y: 0.5},
          }}
        />

        { /* NEED REFACTORING FOR CLEAN CODE */ }
        {letterGrade != '' ? <Text style={styles.text}>Notunuz</Text> : <></>}
        <Text style={styles.text}>{grade}</Text>
        <Text style={styles.text}>{letterGrade}</Text>
        {
          letterGrade != '' ?
          <Text style={[styles.text, {fontSize:15}]}>(Harf notu üniversiteye göre değişiklik gösterebilir)</Text>
          : <></>
        }

        <Text style={{marginTop:5, textAlign:'center'}}>Geçme Notu: {gecmeNotu}</Text>
        <Chip
          style={styles.chip}
          title="45"
          onPress={() => setGecmeNotu(45)}
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: ['red', 'pink'],
            start: {x: 0, y: 0.5},
            end: {x: 1, y: 0.5},
          }}
        />
        <Chip
         style={styles.chip}
          title="50"
          onPress={() => setGecmeNotu(50)}
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: ['red', 'pink'],
            start: {x: 0, y: 0.5},
            end: {x: 1, y: 0.5},
          }}
        />
        <Chip
          style={styles.chip}
          title="60"
          onPress={() => setGecmeNotu(60)}
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: ['red', 'pink'],
            start: {x: 0, y: 0.5},
            end: {x: 1, y: 0.5},
          }}
        />  
        </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
    color: '#212121',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 40,
  },

  text: {
    fontSize: 30,
    color: '#212121',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 0.3,
    marginLeft:15,
    marginRight:15
  },
  chip: {
    size: 20,
    marginLeft: 15,
    marginRight: 15,
    marginTop:10
  },
  image: {
    flex: 1,
  },
});

export default App;
