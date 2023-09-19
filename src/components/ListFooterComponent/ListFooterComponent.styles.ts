import LottieView from 'lottie-react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: 150px;
  padding-top: 20px;
  align-items: center;
`;

export const AnimationContainer = styled.View`
  width: 60px;
  height: 60px;
`;

export const GitHubLoader = styled(LottieView).attrs({
  loop: true,
  autoPlay: true,
  source: require('../../assets/animations/github_loader.json'),
})`
  width: 100%;
  height: 100%;
`;
