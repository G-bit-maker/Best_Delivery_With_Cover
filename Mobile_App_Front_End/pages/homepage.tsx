import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import TabOneScreen from '../screens/TabOneScreen';
import * as React from 'react';
import { Avatar } from 'react-native-elements';
import { View, Image, StyleSheet } from 'react-native';
import { BottomTabParamList, TabOneParamList, TabTwoParamList} from '../types';

const TabOneStack = createStackNavigator<TabOneParamList>();

function HomePage() {
    return (
      <TabOneStack.Navigator>
        <TabOneStack.Screen
          name="TabOneScreen"
          component={TabOneScreen}
          options={{headerTitle: "Home"}}
        />
      </TabOneStack.Navigator>
    );
  }

  export default HomePage
  

