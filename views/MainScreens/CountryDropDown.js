import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import CountryPicker from 'rn-country-dropdown-picker';

export default function App() {
  function handleSelection(e) {
    console.log(e);
  }

  return (
    <View style={{borderRadius: 15}}>
      <CountryPicker
        Placeholder="Pakistan"
        flagSize={24}
        selectedItem={handleSelection}
      />
    </View>
  );
}
