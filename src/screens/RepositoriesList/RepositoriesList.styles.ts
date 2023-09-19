import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.DEFAULT_BACKGROUND};
`;

export const List = styled.FlatList`
  flex: 1;
  padding: 15px;
`;
