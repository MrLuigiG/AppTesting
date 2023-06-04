import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const CreativeComponent = () => {
  return (
    <TouchableOpacity style={styles.creativeContainer}>
      <Text style={styles.creativeText}>Click Me!</Text>
    </TouchableOpacity>
  );
};

const App = () => {
  const [counter, setCounter] = useState(0);
  const [inputText, setInputText] = useState('');

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  const handleInputChange = (text) => {
    setInputText(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Counter: {counter}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={incrementCounter} />
        <Button title="Decrement" onPress={decrementCounter} />
      </View>
      <TextInput
        style={styles.input}
        onChangeText={handleInputChange}
        value={inputText}
        placeholder="Enter text"
      />
      <CreativeComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  creativeContainer: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
  },
  creativeText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
