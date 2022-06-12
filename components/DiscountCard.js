import * as React from 'react';
import { Linking } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


export default function DiscountCard (props) {
    return (
        <Card style = {{width:'100%'}}>
          <Card.Content>
            <Title>{props.title}</Title>
          </Card.Content>
          <Card.Cover source={{ uri: props.imgUrl }} />
          <Card.Actions>
              <Button onPress={()=> Linking.openURL(props.infoUrl)}>
                Click here to find out more</Button>
          </Card.Actions>
        </Card>
      );
}
