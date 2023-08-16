import React from 'react';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
// import { CounterScreen } from './src/screens/CounterScreen';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { SafeAreaView } from 'react-native';
import { PositionScreen } from './src/screens/PositionScreen';
import { FlexScreen } from './src/screens/FlexScreen';
import { TareaScreen } from './src/screens/TareaScreen';

export const App = () => {
  return (
      <SafeAreaView style={{flex:1, backgroundColor:'#28425B'}}>
        {/* // <HolaMundoScreen/> */}
        {/* // <CounterScreen/> */}
        {/* <BoxObjectModelScreen/> */}
        {/* <DimensionesScreen/> */}
        {/* <PositionScreen/> */}
        {/* <FlexScreen/> */}
        <TareaScreen/>
      </SafeAreaView>
  );
};
