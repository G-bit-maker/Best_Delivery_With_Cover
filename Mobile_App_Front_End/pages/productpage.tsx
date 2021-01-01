import { createStackNavigator } from '@react-navigation/stack';
import TabThreeScreen from '../screens/TabThreeScreen';
import * as React from 'react';
import { TabThreeParamList } from '../types';


const ThreeTwoStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  return (
    <ThreeTwoStack.Navigator>
      <ThreeTwoStack.Screen
        name="TabThreeScreen"
        component={TabThreeScreen}
        options={{ headerTitle: 'Product' }}
      />
    </ThreeTwoStack.Navigator>
  );
}

export default TabThreeNavigator