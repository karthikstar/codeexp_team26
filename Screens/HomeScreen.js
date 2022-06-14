import React, { Component } from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  StatusBar,
  Dimensions,
  Button,
} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import * as Progress from 'react-native-progress';
import Category from '../components/Category.js';
import { createStackNavigator, CreateStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

const headerImage = require('../assets/header.jpg');
const notification = require('../assets/Notification.png');
const buffguy = require('../assets/buffguy.png');
const fire = require('../assets/fire.png');
const banner = require('../assets/BG.png');
const safra = require('../assets/safra.png');
const cycle = require('../assets/cycle.png');
const yoga = require('../assets/yoga.png');
const walk = require('../assets/walk.png');
const next = require('../assets/next.png');
const play = require('../assets/play.png');
const star = require('../assets/Star.png');
const book = require('../assets/Book.png');
const home = require('../assets/Home.png');
const heart = require('../assets/H.png');
const calendar = require('../assets/Calender.png');
const profile = require('../assets/User.png');
const plus = require('../assets/Plus.png');

export default function HomeScreen () {
  return (
      <ScrollView style={styles.container}>
        <View style={styles.screen}>
          {/* <Header /> */}
          <Banner />
        </View>
        <View style={{marginHorizontal: '3%'}}>
          <Label>Your Progress</Label>
          <View style={{flexDirection: 'row'}}>
            {data.map((item, index) => (
              <Card data={item} index={index} key = {index}/>
            ))}
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Label>Nice weather? Head out!</Label>
            {/* <Text
              style={{
                opacity: 0.5,
                fontSize: 12,
              }}>
              View All
            </Text> */}
          </View>
          <View style={{flexDirection: 'row'}}>
            {data.map((item, index) => (
              <Outdoors index={index} key={index}/>
            ))}
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Label>Feeling lazy? Stay home!</Label>
            {/* <Text
              style={{
                opacity: 0.5,
                fontSize: 12,
              }}>
              View All
            </Text> */}
          </View>
          <View style={{flexDirection: 'row'}}>
            {data.map((item, index) => (
              <Indoors index={index} key={index}/>
            ))}
          </View>
        </View>
      </ScrollView>
  );
};

// const BottomTab = () => (
//   <View
//     style={{
//       position: 'absolute',
//       bottom: 10,
//       margin: 10,
//       marginHorizontal: 25,
//       borderRadius: 20,
//       padding: 10,
//       // width: '100%',
//       backgroundColor: '#EDEDED',
//       flexDirection: 'row',
//       alignItems: 'center',
//     }}>
//     <BottomButton image={home} />
//     <BottomButton image={heart} />
//     <BottomButton
//       image={plus}
//       style={{
//         position: 'absolute',
//         left: '43%',
//         top: -25,
//         backgroundColor: '#fff',
//         padding: 8,
//         borderRadius: 20,
//       }}
//     />
//     <BottomButton />
//     <BottomButton image={calendar} />
//     <BottomButton image={profile} />
//   </View>
// );
// const BottomButton = ({image, style, imageStyle}) => (
//   <>
//     <View
//       style={[
//         {
//           flex: 1,
//           alignSelf: 'center',
//           alignItems: 'center',
//         },
//         style,
//       ]}>
//       <Image
//         source={image}
//         style={[
//           {
//             height: image === plus ? 40 : 20,
//             width: image === plus ? 40 : 20,
//           },
//           imageStyle,
//         ]}
//       />
//     </View>
//     {image === home && (
//       <View
//         style={{
//           width: '10%',
//           position: 'absolute',
//           height: 2,
//           backgroundColor: '#8860a2',
//           bottom: 0,
//           left: 25,
//         }}
//       />
//     )}
//   </>
// );

const Outdoors = () => (

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
                            name="Mount Faber SAFRA" 
                        />
                        <Category imageUri={require('../assets/punggolpark.png')}
                            name="Punggol Park"
                        />
                        <Category imageUri={require('../assets/bishanamkpark.png')}
                            name="Bishan AMK Park"
                        />
                    </ScrollView>
                </View>
            </View>
        </View>
    </View>
);

const Indoors = () => (
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
);

//     <View style={{borderRadius: 10, overflow: 'hidden'}}>
//       <ImageBackground
//         source={safra}
//         style={{
//           height: 150,
//           width: 300,
//         }}>
//         {/* <LinearGradient
//           locations={[0, 1.0]}
//           colors={['rgba(0,0,0,0.00)', 'rgba(0,0,0,0.60)']}
//           style={{
//             position: 'absolute',
//             width: '100%',
//             height: '100%',
//           }}></LinearGradient>  */}
//       </ImageBackground>
//       <Text
//         style={{
//           position: 'absolute',
//           bottom: 5,
//           left: 10,
//           color: '#fff',
//         }}>
//         Transformation
//       </Text>
//       <View
//         style={{
//           position: 'absolute',
//           backgroundColor: '#fff',
//           padding: 5,
//           right: 10,
//           top: 10,
//           borderRadius: 5,
//         }}>
//         <Image source={star} style={{height: 10, width: 10}} />
//       </View>
//     </View>
//     <View
//       style={{
//         backgroundColor: 'white',
//         padding: 10,
//         borderRadius: 15,
//       }}>
//       <View
//         style={{
//           position: 'absolute',
//           backgroundColor: '#8860a2',
//           padding: 10,
//           right: 25,
//           top: -15,
//           borderRadius: 15,
//           zIndex: 3,
//         }}>
//         <Image source={play} style={{height: 10, width: 10}} />
//       </View>
//       <Text>
//         Mount Faber Safra
//       </Text>
//       <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
//         <Text style={{fontSize: 12}}>
//           <Image source={book} style={{height: 15, width: 15}} />
//           {'   Beginner'}
//         </Text>
//         <Text
//           style={{
//             fontSize: 12,
//             color: '#8860a2',
//           }}>
//           45 Min
//         </Text>
//       </View>
//     </View>
//   </View>


const Card = ({data, index}) => {
  return (
    <View
      style={{
        flex: 1,
        height: index === 1 ? 180 : 150,
        padding: 10,
        alignSelf: 'center',
        backgroundColor: data.color,
        justifyContent: 'space-between',
        marginHorizontal: 8,
        borderRadius: 10,
        shadowColor: 'lightgrey',
        shadowOffset: {width: -5, height: 5},
        shadowOpacity: 0.5,
        shadowRadius: 2,
      }}>
      <Image source={data.image} style={{height: 25, width: 25}} />
      <View style={{alignSelf: 'center', margin: 5}}>
        <Progress.Circle
          size={50}
          progress={data.status / 100}
          showsText
          unfilledColor="#ededed"
          borderColor="#ededed"
          color={data.darkColor}
          direction="counter-clockwise"
          fill="white"
          strokeCap="round"
          thickness={5}
          style={{
            shadowColor: 'grey',
            shadowOffset: {width: 2, height: 2},
            shadowOpacity: 0.1,
            shadowRadius: 1,
          }}
          textStyle={{
            fontSize: 16,
            fontWeight: 'bold',
          }}
        />
      </View>
      <View>
        <Text style={{fontSize: 10}}>
          {'Day     1'}
        </Text>
        <Text style={{fontSize: 10}}>
          {'Time   20 min'}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text>{data.name}</Text>
        <View
          style={{
            backgroundColor: data.lightColor,
            padding: 2,
            borderRadius: 10,
          }}>
          <Image
            source={next}
            style={{
              height: 12,
              width: 12,
              resizeMode: 'contain',
            }}
          />
        </View>
      </View>
    </View>
  );
};
// const Header = () => (
//   <View style={styles.header}>
//     <ImageContainer image={headerImage} />
//     <HeaderTitle />
//     <ImageContainer image={notification} height={'50%'} width={'50%'} />
//   </View>
// );
const Banner = () => (
  <>
    <ImageBackground style={styles.banner} source={banner}>
      <View style={styles.bannerContainer}>
        <View style={styles.rowLabel}>
          {/* <View style={styles.fireContainer}>
            <Image
              source={fire}
              resizeMode="contain"
              style={styles.fireImage}
            />
          </View>
          <Text style={styles.offer}>limited offer</Text> */}
        </View>
        <OfferText>Train for your</OfferText>
        <OfferText>IPPT or NS FIT today!</OfferText>
      </View>
    </ImageBackground>
    <Image source={buffguy} style={styles.buffguy} resizeMode="contain" />
  </>
);

const OfferText = ({children}) => (
  <Text style={styles.offerText}>{children}</Text>
);

const ImageContainer = ({image, height = '100%', width = '100%'}) => (
  <View style={styles.imageContainer}>
    <Image source={image} style={[{height, width}]} />
  </View>
);
// const HeaderTitle = () => (
//   <View style={styles.title}>
//     <Text style={styles.bigTitle}>Hi, Jane</Text>
//     <Text style={styles.smallTitle}>Aug 12, 2021</Text>
//   </View>
// );

const Label = ({children}) => <Text style={styles.label}>{children}</Text>;
const styles = StyleSheet.create({
  container: {flex: 1},
//   header: {
//     paddingHorizontal: 5,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
  title: {paddingHorizontal: 10, flex: 1, justifyContent: 'center'},
  bigTitle: {fontSize: 16},
  smallTitle: {fontSize: 10, opacity: 0.6},
  image: {height: '100%', width: '100%'},
  fireImage: {height: 15, width: 15, alignSelf: 'center', margin: 5},
  banner: {
    marginTop: 10,
    padding: 16,
    resizeMode: 'contain',
    borderRadius: 20,
    overflow: 'hidden',
    flexDirection: 'row',
    opacity: 0.8
  },
  bannerContainer: {flex: 1},
  label: {fontSize: 20, marginVertical: 10},
  buffguy: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    zIndex: 10,
    height: '100%',
    width: '50%',
    transform: [{rotateY: '180deg'}],
  },
  imageContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen: {margin: '3%'},
  offer: {color: 'white', fontSize: 12},
  offerText: {color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'left'},

  rowLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fireContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const data = [
  {
    name: 'Cycling',
    status: 85,
    image: cycle,
    lightColor: '#f8e4d9',
    color: '#fcf1ea',
    darkColor: '#fac5a4',
  },
  {
    name: 'Walking',
    status: 25,
    image: walk,
    lightColor: '#d7f0f7',
    color: '#e8f7fc',
    darkColor: '#aceafc',
  },
  {
    name: 'Yoga',
    status: 85,
    image: yoga,
    lightColor: '#dad5fe',
    color: '#e7e3ff',
    darkColor: '#8860a2',
  },
];
