import React from 'react';
import { Text, View , SafeAreaView, ScrollView, StyleSheet, StatusBar} from 'react-native';
import DiscountCard from '../components/DiscountCard';

export default function DiscountsScreen () {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.ScrollView}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <DiscountCard
              title="THE CHEVRONS: 10% discount off total bill at Poolside Café"
              imgUrl="https://www.ns.sg/web/wcm/connect/nsmen/aff728a8-f9ef-41f8-8435-d48f02787753/NS-Campaign-2-Cafe-10%25.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_1QK41482LO8A60ANGHG1352080-aff728a8-f9ef-41f8-8435-d48f02787753-nFii4en0"
              infoUrl="https://www.ns.sg/web/portal/nsmen/home/promotions/listing/f_and_b/the_chevrons_10_discount_off_total_bill_at_poolside_cafe"
              />
            <DiscountCard 
              title="NSF Tuesday Movie Special At Shaw Theatres"
              imgUrl="https://safra-resources.azureedge.net/media-library/images/default-source/default-album/nsf-tuesday-movie-special94348d84901e4198af1013a95ea87bd4.jpg?sfvrsn=172accc8_0"
              infoUrl="https://www.safra.sg/promotions/safra-and-servicemen-11b/nsf-tuesday-movie-special"
            />  
            <DiscountCard
              title="10% Off Total Bill at The Assembly Ground"
              imgUrl="https://www.ns.sg/web/wcm/connect/nsmen/2c95ff2c-1077-4751-9d33-094932e20082/promotion.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_1QK41482LO8A60ANGHG1352080-2c95ff2c-1077-4751-9d33-094932e20082-o4pRVbp"
              infoUrl="https://www.ns.sg/web/portal/nsmen/home/promotions/listing/f_and_b/the+assembly_ground_10_off_total_bill_at_the_assembly_ground"
            />
            <DiscountCard
              title="Royal Wings: 25% off the Sunset Yacht Cruise"
              imgUrl="https://www.ns.sg/web/wcm/connect/nsmen/339c42a1-6033-421e-a763-df0687176ae0/promo.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_1QK41482LO8A60ANGHG1352080-339c42a1-6033-421e-a763-df0687176ae0-o4uwhmZ"
              infoUrl="https://www.ns.sg/web/portal/nsmen/home/promotions/listing/others/royal_wings_25_off_the_sunset_yacht_cruise"
            />
        </View>
        </ScrollView>
      </SafeAreaView>

    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
