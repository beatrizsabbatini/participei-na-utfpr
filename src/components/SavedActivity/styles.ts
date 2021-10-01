import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface CertificateContainerProps{
  containsCertificate?: boolean
}

export const Container = styled.TouchableOpacity`
  background-color: #fff;
  align-self: stretch;
  border: 1px solid ${({theme}) => theme.colors.border};
  border-radius: ${RFValue(11)}px;
  padding: ${RFValue(10)}px;
  padding-bottom: ${RFValue(45)}px;
  shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 2;
  };
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 3;
  margin: 5px;
`;

export const CardTop = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Category = styled.Text`
  font-weight: 100;
  font-size: ${RFValue(13)}px;
  color: ${({theme}) => theme.colors.secondary};
`

export const Title = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(17)}px;
  color: ${({theme}) => theme.colors.secondary};
`

export const CardBottom = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${RFValue(20)}px;
`

export const SeeMoreContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`

export const SeeMoreText = styled.Text`
  color: ${({ theme }) => theme.colors.primary_light};
  font-size: ${RFValue(12)}px;
`

export const CertificateContainer = styled.TouchableOpacity<CertificateContainerProps>`
  left: 0.5;
  right: 0.3;
  bottom: 1;
  border-bottom-left-radius: ${RFValue(7)}px;
  border-bottom-right-radius: ${RFValue(7)}px;
  height: ${RFValue(35)}px;
  background-color: ${({containsCertificate}) => containsCertificate ? '#FFF5DA' : '#F3F3F3'};
  position: absolute;
  border: 1px solid ${({theme}) => theme.colors.secondary};
  border-bottom-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const ThinText = styled.Text`
  font-weight: 100;
  font-size: ${RFValue(13)}px;
  color: ${({theme}) => theme.colors.secondary};
  margin-right: ${RFValue(8)}px;
`