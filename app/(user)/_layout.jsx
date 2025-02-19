import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import UserHome from './index';
import AnotherUserScreen from './AnotherUserScreen';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const UserTabs = () => (
  <Tab.Navigator screenOptions={{headerShown:false}}>
    <Tab.Screen name="Home" component={UserHome} />
    <Tab.Screen name="AnotherScreen" component={AnotherUserScreen} />
  </Tab.Navigator>
);

const UserDrawer = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Tabs" component={UserTabs} />
    <Drawer.Screen name="AnotherDrawerScreen" component={AnotherUserScreen} />
  </Drawer.Navigator>
);

const UserStack = () => <UserDrawer />;

export default UserStack;