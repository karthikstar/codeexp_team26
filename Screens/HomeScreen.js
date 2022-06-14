import React, { Component } from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import Outdoors from '../components/Outdoors.js';
import Indoors from '../components/Indoors.js';
import ProgressCard from '../components/ProgressCard.js';
import { getData } from '../services/dataforHomeScreen.js';
const buffguy = require('../assets/buffguy.png');
const banner = require('../assets/BG.png');

const data = getData()

export default function HomeScreen () {
  return (
      <ScrollView style={styles.container}>
        <View style={styles.screen}>
          <Banner />
        </View>
        <View style={{marginHorizontal: '3%'}}>
          <Label><Text style={{fontWeight:'600'}}>Your Progress</Text></Label>
          <View style={{flexDirection: 'row'}}>
            {data.map((item, index) => (
              <ProgressCard data={item} index={index} key = {index}/>
            ))}
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '2%',
              marginTop: '2%'
            }}>
            <Label><Text style={{fontWeight:'600'}}>Nice weather? Head out!</Text></Label>
          </View>
          <View style={{flexDirection: 'row'}}>
            {data.map((item, index) => (
              <Outdoors index={index} key={index}/>
            ))}
          </View>
          <View
            style={{
              marginBottom: '2%',
              marginTop: '2%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Label><Text style={{fontWeight:'600'}}>Feeling Lazy? Workout at home!</Text></Label>
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



const Banner = () => (
  <>
    <ImageBackground style={styles.banner} source={banner}>
      <View style={styles.bannerContainer}>
        <View style={styles.rowLabel}>
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

const Label = ({children}) => <Text style={styles.label}>{children}</Text>;

const styles = StyleSheet.create({
  container: {flex: 1},
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

