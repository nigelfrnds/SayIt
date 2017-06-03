import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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
      screen: CategoryStackRouter,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="format-list-bulleted" size={30} color={tintColor}/>
        ),
      }
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
