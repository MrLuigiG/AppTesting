import React from 'react';
import { View, StyleSheet } from 'react-native';
import ThemedPage from './ThemedPage';

const App = () => {
  return (
    <View style={styles.container}>
      <ThemedPage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
