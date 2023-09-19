import LottieView from 'lottie-react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const AnimationContainer = styled.View`
  width: 250px;
  height: 250px;
`;

export const EmptyAnimation = styled(LottieView).attrs({
  loop: true,
  autoPlay: true,
})`
  width: 100%;
  height: 100%;
`;

export const ContentContainer = styled.View`
  padding-horizontal: 20px;
`;

export const Title = styled.Text`
  font-weight: 700;
  line-height: 28px;
  text-align: center;
  font-family: SF Pro Text;
  font-size: ${({theme}) => theme.SIZES.LARGE}px;
  color: ${({theme}) => theme.COLORS.PRIMARY_TEXT};
`;

export const Description = styled.Text`
  line-height: 24px;
  text-align: center;
  font-family: SF Pro Text;
  font-size: ${({theme}) => theme.SIZES.MEDIUM}px;
  color: ${({theme}) => theme.COLORS.SECONDARY_TEXT};
`;
