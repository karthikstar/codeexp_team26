import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/HomeScreen';
import CalenderScreen from './Screens/CalenderScreen';
import DiscountsScreen from './Screens/DiscountsScreen';
import DistanceTrackerScreen from './Screens/DistanceTrackerScreen';
const Tab = createBottomTabNavigator();
import { FontAwesome } from "@expo/vector-icons";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductsList } from './screens/ProductsList.js';
import { ProductDetails } from './screens/ProductDetails.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Products' component={ProductsList} 
          options={({ navigation }) => ({
            title: 'Products',
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
export default App;

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;
//             // Set the Icon based on which route it is (name of the tab)
//             if (route.name === 'Home'){
//               iconName = "home";
//             } else if (route.name === "Calender"){
//               iconName = "list";
//             } else if (route.name === "Discounts"){
//               iconName = "percent";
//             } else if (route.name === "DistanceTracker"){
//               iconName = "list";
//             }
 
//             // You can return any component that you like here!
//             return <FontAwesome name={iconName} size={size} color={color} />;
//           },
//           tabBarActiveTintColor: 'hotpink',
//           tabBarInactiveTintColor: 'gray',
//         })}
//       >
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Calender" component={CalenderScreen} />
//         <Tab.Screen name="Discounts" component={DiscountsScreen} />
//         <Tab.Screen name="DistanceTracker" component={DistanceTrackerScreen} />

//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }