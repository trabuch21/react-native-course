import React from 'react';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
// import { CounterScreen } from './src/screens/CounterScreen';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { SafeAreaView } from 'react-native';
import { PositionScreen } from './src/screens/PositionScreen';

export const App = () => {
  return (
      <SafeAreaView style={{flex:1}}>
        {/* // <HolaMundoScreen/> */}
        {/* // <CounterScreen/> */}
        {/* <BoxObjectModelScreen/> */}
        {/* <DimensionesScreen/> */}
        <PositionScreen/>
      </SafeAreaView>
  );
};
