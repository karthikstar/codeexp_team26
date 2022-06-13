import React from 'react';
import { Text, View } from 'react-native';
import Distance from '../components/Distance';

export default function DistanceTrackerScreen () {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Distance />
        <Text>Distance tracking for NS FIT</Text>
      </View>
    );
  }