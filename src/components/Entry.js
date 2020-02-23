import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Card, CardItem, Text, View, Body} from 'native-base';
const renderText = (
  text = 'Hello world I am a big fan of yours and I what I am',
) => {
  if (text.length <= 47) {
    return text;
  }
  return text.substr(0, 40).concat('...');
};

const Entry = props => {
  const {cardStyle, textRender, categoryMargin} = styles;
  const {text, date, category} = props;
  return (
    <TouchableOpacity>
      <Card style={cardStyle}>
        <CardItem>
          <Body>
            <Text>{renderText(text)}</Text>
            <View style={textRender}>
              <View style={categoryMargin}>
                <Text>{category}</Text>
              </View>
              <View>
                <Text note>{date}</Text>
              </View>
            </View>
          </Body>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};

const styles = {
  cardStyle: {
    flex: 0,
    borderLeftWidth: 10,
    borderColor: 'green',
  },
  textRender: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryMargin: {
    marginRight: 10,
  },
};
export default Entry;
