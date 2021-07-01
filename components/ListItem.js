import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import BodyText from './BodyText';

const ListItem = (props) => {
  return (
    <View key={props.guess} style={styles.listItem}>
      <BodyText>#{props.pastGuesses.length}</BodyText>
      <BodyText>{props.guess}</BodyText>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default ListItem;
