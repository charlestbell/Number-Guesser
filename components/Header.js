import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import colors from '../constants/colors';
import TitleText from '../components/TitleText';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <TitleText style={styles.headerTitle}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,

    backgroundColor: Platform.OS == 'android' ? colors.primary : 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: Platform.OS == 'ios' ? '#ccc' : 'transparent',
    borderBottomWidth: Platform.OS == 'ios' ? 1 : 0,
  },
  headerTitle: {
    color: Platform.OS === 'ios' ? colors.primary : 'white',
    fontSize: 18,
  },
});

export default Header;
