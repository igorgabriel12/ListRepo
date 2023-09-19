import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  gap: 15px;
  margin-bottom: 10px;
  flex-direction: row;
  padding-top: 15px;
`;

export const Avatar = styled.Image`
  width: 52px;
  height: 52px;
  border-radius: 52px;
  background-color: #d9d9d9;
`;

export const Body = styled.View`
  flex: 1;
  padding-bottom: 15px;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #ebebeb;
`;
export const ContentContainer = styled.View`
  flex: 1;
`;

export const RepoName = styled.Text`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  font-family: SF Pro Text;
  letter-spacing: -0.37px;
`;

export const Owner = styled.Text`
  font-family: SF Pro Text;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  line-height: 24px;
  letter-spacing: 0px;
`;

export const Stars = styled.Text`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  font-family: SF Pro Text;
  letter-spacing: -0.07px;
`;
