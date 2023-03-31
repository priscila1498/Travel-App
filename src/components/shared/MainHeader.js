import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from './Icon';
import {sizes, spacing} from '../../constants/theme';
import { useNavigation } from '@react-navigation/native';

const MainHeader = ({title}) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View style={[styles.container, {marginTop: insets.top}]}>
      <Icon icon="Usuario" onPress={() => navigation.navigate ('Edit2')}  />
    

      
      <Text style={styles.title}>{title}</Text>
      <Icon icon="Logout" onPress={() => navigation.navigate('Logout')}  />
     
     </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.l,
  },
  title: {
    fontSize: sizes.h3,
    fontWeight: 'bold',
  },
  title2: {
    fontSize: sizes.caption,
    fontWeight: 'bold',
    position: 'absolute',
    paddingHorizontal: spacing.m,
    paddingVertical: spacing.xs,
    paddingTop: spacing.xl
  },
});

export default MainHeader;
