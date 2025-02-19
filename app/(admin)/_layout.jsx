import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import AdminHome from './index';
import AnotherAdminScreen from './AnotherAdminScreen';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const AdminTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={AdminHome} />
    <Tab.Screen name="AnotherScreen" component={AnotherAdminScreen} />
  </Tab.Navigator>
);

const AdminDrawer = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Tabs" component={AdminTabs} />
    <Drawer.Screen name="AnotherDrawerScreen" component={AnotherAdminScreen} />
  </Drawer.Navigator>
);

const AdminStack = () => <AdminDrawer />;

export default AdminStack;