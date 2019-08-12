import HomePage from '../components/HomePage';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import RepositoryDetailsPage from '../components/RepositoryDetailsPage';

const RootStack = createStackNavigator({
  Home: HomePage,
  RepositoryDetails: RepositoryDetailsPage
}, {
  defaultNavigationOptions: {
    header: null
  }
});

// And the app container
export const Navigation = createAppContainer(RootStack);