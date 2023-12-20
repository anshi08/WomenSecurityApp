import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

function Map() {
  return (
    <View style={styles.container}>
      <MapView 
         style={styles.map} 
        //  initialRegion = {{
        //     latitude: 37.78825,
        //     longitude: -122.4324,
        //     latitudeDelta: 0.0922,
        //     longituddeDelta: 0.0421
        //  }}
         />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default Map