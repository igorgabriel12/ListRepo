import React from 'react';

import {
  Body,
  Stars,
  Owner,
  Avatar,
  RepoName,
  Container,
  ContentContainer,
} from './RepositoryItem.styles';
import {IRepository} from '../../types/repositoriesTypes';

interface IRepositoryItem {
  repository: IRepository;
  goToRepositoryDetails: () => void;
}

const RepositoryItem: React.FC<IRepositoryItem> = ({
  goToRepositoryDetails,
  repository: {name, stargazers_count, owner},
}) => {
  return (
    <Container onPress={goToRepositoryDetails}>
      <Avatar source={{uri: owner.avatar_url}} />
      <Body>
        <ContentContainer>
          <RepoName>{name}</RepoName>
          <Owner>{owner.login}</Owner>
        </ContentContainer>
        <Stars>{`${stargazers_count} stars`}</Stars>
      </Body>
    </Container>
  );
};

export default RepositoryItem;
