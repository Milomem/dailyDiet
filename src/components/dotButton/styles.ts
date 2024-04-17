import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
    width: 159.5px;
    height: 50px;
    border-radius: 6px;
    gap: 8px;

    background-color: ${({theme}) => theme.COLORS.GRAY_600};
    padding: 16px;

    align-items: center;
    justify-content: center;
`

export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
        text-align: center;
    `}
`

export const Dot = styled.View`
    width: 8px;
    height: 8px;
    background-color: ${({ theme }) => theme.COLORS.GREEN_DARK};
    border-radius: 99px;
`

export const ContainerDot = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`