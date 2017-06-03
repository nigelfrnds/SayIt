import React from 'react';
import { StackNavigator } from 'react-navigation';
import BrowsePage from './screens/BrowsePage';
import CategoryScreen from './CategoryScreen';

const CategoryStackRouter = StackNavigator(
  {
    Main: {
      screen: BrowsePage,
    },
    All: {
      screen: CategoryScreen,
    },
    Animals: {
      screen: CategoryScreen,
    },
    Cars: {
      screen: CategoryScreen,
    },
    Instruments: {
      screen: CategoryScreen,
    },
    Random: {
      screen: CategoryScreen,
    },
  },
  {
    headerMode: 'screen',
  }
);

export default CategoryStackRouter;
