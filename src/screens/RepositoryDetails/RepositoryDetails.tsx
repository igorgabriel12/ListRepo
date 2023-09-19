import React, {useCallback, useLayoutEffect} from 'react';

import WebView from 'react-native-webview';
import {SCREENS} from '../../routes/screens';
import {RepositoriesStack} from '../../routes/Routes';
import {Container, GitHubLoader, HeaderLabel} from './RepositoryDetails.styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const RepositoryDetails: React.FC<
  NativeStackScreenProps<RepositoriesStack, SCREENS.REPOSITORY_DETAILS>
> = ({route, navigation}) => {
  const {name, repositoryUri} = route?.params;

  const HeaderTitle = useCallback(
    () => <HeaderLabel>{name}</HeaderLabel>,
    [name],
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: HeaderTitle,
      headerTitleAlign: 'left',
    });
  }, [name, navigation, HeaderTitle]);

  return (
    <Container>
      <WebView
        startInLoadingState
        originWhitelist={['*']}
        source={{uri: repositoryUri}}
        renderLoading={() => <GitHubLoader />}
      />
    </Container>
  );
};

export default RepositoryDetails;
