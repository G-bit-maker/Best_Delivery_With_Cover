import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import HomePage from "../pages/homepage";
import SettingPage from "../pages/settingpage";
import ProductPage from "../pages/productpage";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Home"
        component={HomePage}
      /> 
      <BottomTab.Screen
        name="Settings"
        component={SettingPage}
      />
      <BottomTab.Screen
        name="product"
        component={ProductPage}
      />
    </BottomTab.Navigator>
  );
}


function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}
