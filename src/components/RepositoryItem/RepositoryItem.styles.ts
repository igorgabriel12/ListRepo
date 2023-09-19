import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  gap: 15px;
  padding-top: 15px;
  margin-bottom: 10px;
  flex-direction: row;
`;

export const Avatar = styled.Image`
  width: 52px;
  height: 52px;
  border-radius: 52px;
  background-color: ${({theme}) => theme.COLORS.EMPTY_SCREEN};
`;

export const Body = styled.View`
  flex: 1;
  padding-bottom: 15px;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.COLORS.SEPARATOR};
`;
export const ContentContainer = styled.View`
  flex: 1;
`;

export const RepoName = styled.Text`
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  letter-spacing: -0.37px;
  font-family: SF Pro Text;
  font-size: ${({theme}) => theme.SIZES.MEDIUM}px;
  color: ${({theme}) => theme.COLORS.PRIMARY_TEXT};
`;

export const Owner = styled.Text`
  font-weight: 400;
  text-align: left;
  line-height: 24px;
  letter-spacing: 0px;
  font-family: SF Pro Text;
  font-size: ${({theme}) => theme.SIZES.SMALL}px;
  color: ${({theme}) => theme.COLORS.SECONDARY_TEXT};
`;

export const Stars = styled.Text`
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  letter-spacing: -0.07px;
  font-family: SF Pro Text;
  font-size: ${({theme}) => theme.SIZES.SMALL}px;
  color: ${({theme}) => theme.COLORS.SECONDARY_TEXT};
`;
