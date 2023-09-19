import React from 'react';

import {
  Container,
  GitHubLoader,
  AnimationContainer,
} from './ListFooterComponent.styles';

const ListFooterComponent: React.FC = () => {
  return (
    <Container>
      <AnimationContainer>
        <GitHubLoader />
      </AnimationContainer>
    </Container>
  );
};

export default ListFooterComponent;
