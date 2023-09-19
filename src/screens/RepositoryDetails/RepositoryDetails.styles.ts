import LottieView from 'lottie-react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.DEFAULT_BACKGROUND};
`;

export const HeaderLabel = styled.Text`
  flex: 1;
  left: -10px;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  line-height: 24px;
  letter-spacing: -0.37px;
  font-family: SF Pro Text;
`;

export const GitHubLoader = styled(LottieView).attrs({
  loop: true,
  autoPlay: true,
  source: require('../../assets/animations/github_loader.json'),
})`
  top: 200px;
  width: 100px;
  height: 100px;
  align-self: center;
  position: absolute;
`;
