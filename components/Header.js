import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import colors from '../constants/colors';
import TitleText from '../components/TitleText';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <TitleText styles={styles.headerTitle}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,

    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: 'black',
    fontSize: 18,
  },
});

export default Header;
