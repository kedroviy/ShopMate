/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text style={styles.sectionTitle}>ShopMate</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default App;
