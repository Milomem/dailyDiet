import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
    width: 100%;

    align-items: center;
    justify-content: center;

    gap: 4px;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.COLORS.GRAY_200};
    font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    text-align: start;
`;

export const InputText = styled(TextInput)`
  flex: 1;
  min-height: 48px;
  max-height: 48px;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    background-color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
  
  border-radius: 6px;
  padding: 14px;
`;