import styled, { css } from "styled-components/native";

import { SafeAreaView } from 'react-native-safe-area-context'
import { RouteParams } from ".";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.WHITE};
    padding: 24px;
    margin-top: 32px;
    justify-content: center;
    align-items: center;
`

export const ContainerImage = styled.Image`
    margin-top: 32px;
    margin-bottom: 32px;
`

export const Title = styled.Text<RouteParams>`
    ${({ theme, isDiet }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XL}px;
        color: ${isDiet === true ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
        padding-bottom: 8px;
    `}
`

export const Description = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_100};
        text-align: center;
    `}
`

export const Span = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_100};
    `}
`

export const ButtonContainer = styled.View`
    width: 50%;
    align-items: center;
    align-items: center;
`