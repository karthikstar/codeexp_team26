import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import { FontAwesome } from "@expo/vector-icons";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductsList } from './ProductsList.js';
import { ProductDetails } from './ProductDetails.js';
const Stack = createNativeStackNavigator();

export default function Products() {
  return (
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen name='Products' component={ProductsList} 
          options={({ navigation }) => ({
            title: 'Current Inventory @ EMart',
            headerTitleStyle: styles.headerTitle,
          })}/>
          <Stack.Screen name='ProductDetails' component={ProductDetails} 
          options={({ navigation }) => ({
            title: 'Product Details',
            headerTitleStyle: styles.headerTitle,
          })} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20
  }
});
