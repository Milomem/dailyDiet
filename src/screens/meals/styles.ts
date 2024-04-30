import styled, { css } from "styled-components/native";
import { RouteParams } from ".";
import { DotStyleTypeProps } from "@components/mealsCard/styles";

type ContainerProps = {
    color: string;
}

export const Container = styled.View<ContainerProps>`
    flex: 1;
    background-color: ${({theme, color}) => color  === 'GREEN' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    padding-top: 48px;
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
        font-size: 20px;
        font-family: ${theme.FONT_FAMILY.BOLD} ;
        color: ${theme.COLORS.GRAY_100};
    `};
`

export const Subtitle = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_200};
        margin-top: 8px;
        margin-bottom: 24px;
    `};
`

export const Time = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_100};
    `};
`

export const DotContainer = styled.View`
    width: 159.5px;
    height: 50px;
    border-radius: 99px;
    gap: 8px;

    background-color: ${({theme}) => theme.COLORS.GRAY_600};
    padding-left: 16px;
    padding-right: 16px;

    padding-top: 8px;
    padding-bottom: 8px;

    align-items: center;
    justify-content: center;
    flex-direction: row;
`

export const DotTitle = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
        text-align: center;
    `}
`

export const Dot = styled.View<ContainerProps>`
    width: 8px;
    height: 8px;
    background-color: ${({ theme , color}) => color === 'GREEN' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    border-radius: 99px;
`

export const ButtonContainer = styled.View`
    flex: 1;
    width: 100%;
    gap: 16px;
    justify-content: flex-end;
    margin-top: 24px;
`