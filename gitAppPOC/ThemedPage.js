import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Provider as PaperProvider, TextInput } from 'react-native-paper';

const ThemedPage = () => {
  const [counter, setCounter] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [inputText, setInputText] = useState('');

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  const changeBackgroundColor = () => {
    const randomColor = getRandomColor();
    setBackgroundColor(randomColor);
  };

  const resetBackgroundColor = () => {
    setBackgroundColor('white');
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <PaperProvider>
      <View style={[styles.container, { backgroundColor }]}>
        <Text style={styles.heading}>Themed Page</Text>
        <View style={styles.buttonContainer}>
          <Button title="Increase" onPress={increaseCounter} />
          <Button title="Decrease" onPress={decreaseCounter} />
        </View>
          <Text style={styles.counterText}>Counter: {counter}</Text>
        <TextInput
          style={styles.input}
          onChangeText={setInputText}
          value={inputText}
          placeholder="Enter text"
        />
        <Button title="Change Background" onPress={changeBackgroundColor} />
        <Button title="Reset Background" onPress={resetBackgroundColor} />
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#621984',
  },
  counterText: {
    fontSize: 18,
    marginBottom:20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    marginBottom: 20,
  },
});

export default ThemedPage;
