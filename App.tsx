import React, {useState} from 'react';
import {Alert, Image, View, Text, TouchableOpacity} from 'react-native';
import {StatusBar} from 'react-native';

import Clipboard from '@react-native-clipboard/clipboard';
import Slider from '@react-native-community/slider';

import styles from './src/styles';
import img from './assets/lock256.png';

let charset =
  '0123456789abcdefghijklmnopqrstuvwxyz#!$%(&*)[-_={+@]<?}>/ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export default function App() {
  const [password, setPassword] = useState('');
  const [size, setSize] = useState(8);

  function generatePass() {
    let pass = '';
    for (let i = 0, n = charset.length; i < size; i++) {
      pass += charset.charAt(Math.floor(Math.random() * n));
    }

    setPassword(pass);
  }

  function copyPass() {
    Clipboard.setString(password);
    Alert.alert('Senha copiada com sucesso!');
  }

  return (
    <View style={styles.container}>
      <StatusBar />

      <Image source={img} style={styles.logo} />
      <Text style={styles.title}> {size} Caracteres</Text>
      <View style={styles.area}>
        <Slider
          style={styles.slider}
          minimumValue={4}
          maximumValue={20}
          step={1}
          minimumTrackTintColor="#EA5455"
          maximumTrackTintColor="#E4DCCF"
          value={size}
          onValueChange={valor => setSize(valor)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePass}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      {password !== '' && (
        <View style={styles.area}>
          <Text style={styles.password} onLongPress={copyPass}>
            {password}
          </Text>
        </View>
      )}
    </View>
  );
}
