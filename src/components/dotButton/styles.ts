import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type DotStypeTypeProps = 'GREEN' | 'RED' 

export type PropsStyleDotButton = {
    color: DotStypeTypeProps;
    isActive?: boolean;
}

export const Container = styled(TouchableOpacity)<PropsStyleDotButton>`
    width: 47.5%;
    height: 50px;
    border-radius: 6px;

    background-color: ${({theme}) => theme.COLORS.GRAY_600};

    ${({theme, isActive, color}) => color === 'GREEN' ?  isActive && css`
        background-color: ${theme.COLORS.GREEN_LIGHT};
        border: 1px solid ${theme.COLORS.GREEN_DARK};
    ` : isActive && css`
        background-color: ${theme.COLORS.RED_LIGHT};
        border: 1px solid ${theme.COLORS.RED_DARK};
    ` }


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

export const Dot = styled.View<PropsStyleDotButton>`
    width: 8px;
    height: 8px;
    background-color: ${({ theme, color }) => color === 'RED' ? theme.COLORS.RED_DARK : theme.COLORS.GREEN_DARK};
    border-radius: 99px;
`

export const ContainerDot = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 8px;
`