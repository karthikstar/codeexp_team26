import * as React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
import Category from './Category';
export default function Outdoors() {
return (
    // const navigation = useNavigation();  
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
                    Outdoor Locations
                </Text>

                <View style={{ height: 120, marginTop: 10 }}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <Category imageUri={require('../assets/safra.png')}
                            name="Mount Faber SAFRA" infoURI = "https://www.safra.sg/clubs/mtfaber"
                        />
                        <Category imageUri={require('../assets/punggolpark.png')}
                            name="Punggol Park" infoURI = "https://www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/punggol-park"
                        />
                        <Category imageUri={require('../assets/bishanamkpark.png')}
                            name="Bishan AMK Park" infoURI="https://www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/bishan---ang-mo-kio-park"
                        />
                    </ScrollView>
                </View>
            </View>
        </View>
    </View>
)}