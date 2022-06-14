import * as React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
import Category from './Category';

export default function Indoors () {
return (
    <View
      style={{
        borderRadius: 15,
        marginHorizontal: 15,
        shadowOffset: {width: -5, height: 3},
        shadowColor: 'grey',
        shadowOpacity: 0.5,
        shadowRadius: 3,
        backgroundColor: '#fff',
      }}>
          <View
              // scrollEventThrottle={16}
              style={{ height: 140, marginTop: 10 }}
          >
              <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 2 }}>
                  <Text style={{ fontSize: 16, fontWeight: '700', paddingHorizontal: 20 }}>
                      Home Exercises
                  </Text>
  
                  <View style={{ height: 120, marginTop: 10 }}>
                      <ScrollView
                          horizontal={true}
                          showsHorizontalScrollIndicator={false}
                      >
                          <Category imageUri={require('../assets/pullups.png')}
                            name="Pull-Up"
                          />
                          <Category imageUri={require('../assets/pushups.png')}
                              name="Push-Up"
                          />
                          <Category imageUri={require('../assets/running.png')}
                              name="Running"
                          />
                      </ScrollView>
                  </View>
              </View>
          </View>
      </View>
)}
