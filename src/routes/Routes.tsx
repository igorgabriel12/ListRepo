import React from 'react';
import {StyleSheet} from 'react-native';
import theme from '../styles/theme';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SCREENS} from './screens';
import RepositoriesList from '../screens/RepositoriesList';
import RepositoryDetails from '../screens/RepositoryDetails';

export type RepositoriesStack = {
  [SCREENS.REPOSITORIES_LIST]: undefined;
  [SCREENS.REPOSITORY_DETAILS]: {repositoryUri: string; name: string};
};

const Stack = createNativeStackNavigator<RepositoriesStack>();

export default () => (
  <Stack.Navigator initialRouteName={SCREENS.REPOSITORIES_LIST}>
    <Stack.Screen
      component={RepositoriesList}
      name={SCREENS.REPOSITORIES_LIST}
      options={() => ({
        headerLargeTitle: true,
        headerTransparent: false,
        headerShadowVisible: false,
        headerTitle: 'Repositórios',
        headerLargeTitleStyle: styles.headerLargeTitleStyle,
      })}
    />
    <Stack.Screen
      component={RepositoryDetails}
      name={SCREENS.REPOSITORY_DETAILS}
      options={() => ({
        headerShadowVisible: false,
        headerBackTitleVisible: false,
      })}
    />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  headerLargeTitleStyle: {
    fontSize: 34,
    fontWeight: '700',
    fontFamily: 'SF Pro Display',
    color: theme.COLORS.PRIMARY_TEXT,
  },
});
