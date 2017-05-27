import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import HomePage from './components/screens/HomePage';
import CategoryStackRouter from './components/CategoryStackRouter';
import SearchPage from './components/screens/SearchPage';
import LibraryPage from './components/screens/LibraryPage';
import SettingsPage from './components/screens/SettingsPage';

const RouterComponent = TabNavigator(
  {
    Home: {
      screen: HomePage,
    },
    Browse: {
      screen: CategoryStackRouter
    },
    Search: {
      screen: SearchPage,
    },
    Library: {
      screen: LibraryPage,
    },
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#7fd1d9',
      labelStyle: {
        fontSize: 12,
        fontWeight: 'bold',
      },
      style: {
        backgroundColor: '#415854',
      },
      showIcon: true,
    }
  }
);

export default RouterComponent;
