import { createStackNavigator } from '@react-navigation/stack';
import TabTwoScreen from '../screens/TabTwoScreen';
import * as React from 'react';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';


const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Settings' }}
      />
    </TabTwoStack.Navigator>
  );
}

export default TabTwoNavigator