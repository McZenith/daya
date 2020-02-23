import React, {useState} from 'react';
import {YellowBox} from 'react-native';
import {uuid} from 'uuidv4';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Content,
} from 'native-base';
import {Entries} from './src/components';

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);

const App = () => {
  const {center, align} = styles;
  const [state, setstate] = useState([
    {
      text: 'I am Isaiah',
      date: '12, April',
      category: 'others',
      key: uuid(),
    },
  ]);

  return (
    <Container>
      <Header>
        <Left style={center} />
        <Body style={center}>
          <Title style={align}>Dayaries</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="more" />
          </Button>
        </Right>
      </Header>
      <Content>
        <Entries data={state} />
      </Content>
    </Container>
  );
};

const styles = {
  center: {
    flex: 1,
  },
  align: {
    alignSelf: 'center',
  },
};
export default App;
