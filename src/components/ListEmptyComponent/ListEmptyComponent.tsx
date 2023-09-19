import React from 'react';
import ExecutiveAvatarAnimation from '../../assets/animations/executive_avatar.json';
import NotFoundAnimation from '../../assets/animations/empty_list.json';

import {
  Title,
  Container,
  Description,
  EmptyAnimation,
  ContentContainer,
  AnimationContainer,
} from './ListEmptyComponent.styles';

interface IListEmptyComponent {
  repositoryNotFound: boolean;
}

const ListEmptyComponent: React.FC<IListEmptyComponent> = ({
  repositoryNotFound,
}) => {
  return (
    <Container>
      <AnimationContainer>
        <EmptyAnimation
          source={
            repositoryNotFound ? NotFoundAnimation : ExecutiveAvatarAnimation
          }
        />
      </AnimationContainer>

      <ContentContainer>
        {repositoryNotFound ? (
          <>
            <Title>Nenhum Resultado Encontrado</Title>
            <Description>
              {`Desculpe, não encontramos nenhum repositório correspondente à sua pesquisa.\nTente novamente com um nome de repositório diferente.`}
            </Description>
          </>
        ) : (
          <>
            <Title>Bem-vindo à Busca de Repositórios</Title>
            <Description>
              Para começar, insira o nome do repositório desejado na barra de
              pesquisa acima...
            </Description>
          </>
        )}
      </ContentContainer>
    </Container>
  );
};

export default ListEmptyComponent;
