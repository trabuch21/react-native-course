import React, {useContext} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';

export const ProtectedScreen = () => {
  const {status} = useContext(AuthContext);
  return (
    <View>
      <SafeAreaView>
        <Text>ProtectedScreen</Text>
        <Text>{JSON.stringify(status, null, 4)}</Text>
      </SafeAreaView>
    </View>
  );
};
