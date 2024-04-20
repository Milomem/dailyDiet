import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export type InputTypeStyleProps = 'BIG' | 'SMALL' ;
export type InputContainerTypeStyleProps = 'BIG' | 'SMALL' ;

type Props = {
  type?: InputTypeStyleProps;
  size?: InputContainerTypeStyleProps;
}

export const Container = styled.View<Props>`
    width: ${({size}) => size === 'BIG' ? '100%' : '47.5%'};

    gap: 4px;

    margin-top: 24px;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.COLORS.GRAY_200};
    font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`;

export const InputText = styled(TextInput)<Props>`
  width: 100%;

  min-height: ${({type}) => type === 'BIG' ? '120px' : '48px'};
  max-height: ${({type}) => type === 'BIG' ? '120px' : '48px'};

  border: 1px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    background-color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    border-color: ${theme.COLORS.GRAY_500};
  `};
  
  border-radius: 6px;
  padding: 14px;
`;