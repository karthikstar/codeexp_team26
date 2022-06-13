import React, {useEffect, useState} from 'react';
import {
  Text, 
  Image, 
  View, 
  ScrollView, 
  SafeAreaView, 
  StyleSheet
  } from 'react-native';
import { Button } from 'react-native-paper';
import { getProduct } from '../services/ProductsService';

export function ProductDetails({route}) {
  const { productId } = route.params;
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(getProduct(productId));
  });

  return (
    <SafeAreaView>
      <ScrollView>
        <Image
          style={styles.image}
          source={product.image}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>$ {product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Text style={styles.BoldedDesc}>{product.location_1}</Text>
          <Text style={styles.BoldedDesc}>{product.location_1_desc}</Text>
          <Text style={styles.description}>{product.location_1_timing}</Text>
          <Text style={styles.description}>Inventory count: {product.location_1_stock}</Text>
          <Button icon="basket" style={styles.resButton} mode='contained'><Text>Reserve Now</Text></Button>
          <Text style={styles.BoldedDesc}>{product.location_2}</Text>
          <Text style={styles.BoldedDesc}>{product.location_2_desc}</Text>
          <Text style={styles.description}>{product.location_2_timing}</Text>
          <Text style={styles.description}>Inventory count: {product.location_2_stock}</Text>
          <Button icon="basket" style={styles.resButton} mode='contained'><Text>Reserve Now</Text></Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  image: {
    height: 300,
    width: '100%'
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
  },
  BoldedDesc: {
    fontSize: 16,
    color: 'black',
    fontWeight: '800',
    marginBottom: 16,
  },
  resButton: {
    marginTop: 8,
    marginBottom:12,
  }
});
