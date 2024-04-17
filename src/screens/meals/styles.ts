import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.GRAY_500};
    margin-top: 32px;
`

export const Content = styled.View`
    flex: 1;
    margin-top: 32px;
    align-items: center;
    justify-content: center;
    gap: 24px;
`

export const Title = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.SIZES.LG};
        font-weight: ${theme.FONT_WEIGHTS.BOLD};
        color: ${theme.COLORS.GRAY_100};
    `};
`

export const Subtitle = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.SIZES.MD};
        font-weight: ${theme.FONT_WEIGHTS.REGULAR};
        color: ${theme.COLORS.GRAY_200};
        margin-top: 8px;
    `};
`

export const Time = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.SIZES.SM};
        font-weight: ${theme.FONT_WEIGHTS.BOLD};
        color: ${theme.COLORS.GRAY_100};
    `};
`

export const DotContainer = styled.View`
    width: 159.5px;
    height: 50px;
    border-radius: 6px;
    gap: 8px;

    background-color: ${({theme}) => theme.COLORS.GRAY_600};
    padding: 16px;

    align-items: center;
    justify-content: center;
`

export const DotTitle = styled.Text`
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