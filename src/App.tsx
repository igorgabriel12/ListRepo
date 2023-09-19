import React from 'react';
import store from './store';
import './config/reactotron';
import theme from './styles/theme';
import {Provider} from 'react-redux';
import Routes from './routes/Routes';
import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
