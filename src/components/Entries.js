import React from 'react';
import {FlatList} from 'react-native';
import {Entry} from './index';

const Entries = props => {
  const {data} = props;
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <Entry
          id={item.key}
          text={item.text}
          category={item.category}
          date={item.date}
        />
      )}
      keyExtractor={item => item.key}
    />
  );
};

export default Entries;
