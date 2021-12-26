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

const App = () => {

  // Grade:not, Midterm:vize, Letter Grade: harf notu
  const [grade, setGrade] = useState();
  const [letterGrade, setLetterGrade] = useState('')
  const [midterm, setMidterm] = useState(0);
  const [final, setFinal] = useState(0);

  function handleCalculate() {
    if (midterm != 0 || final != 0){
      if (midterm <= 100 && midterm >= 0 && final <= 100 && final >= 0) {
        result = midterm * 0.4 + final * 0.6
        setGrade(result)
  
        if (result >= 85) setLetterGrade('AA')
        else if (result >= 75 && result < 85) setLetterGrade('BA')
        else if (result >= 65 && result < 75) setLetterGrade('BB')
        else if (result >= 57 && result < 65) setLetterGrade('CB')
        else if (result >= 50 && result < 57) setLetterGrade('CC')
        else if (result >= 40 && result < 50) setLetterGrade('DC')
        else if (result >= 30 && result < 40) setLetterGrade('FD')
        else if (result >= 0 && result < 30) setLetterGrade('FF')
  
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
        </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
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
