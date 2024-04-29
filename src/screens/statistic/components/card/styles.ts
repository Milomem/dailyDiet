import styled, { css } from "styled-components/native";

export type CardStyleTypeProps = 'GREEN' | 'RED';

export type PropsStyleCard = {
    color?: CardStyleTypeProps;
}

export const Container = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;

    gap: 8px;
    padding: 16px;

    border-radius: 8px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`

export const Percent = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.XXL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`

export const Description = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_200};
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        text-align: center;
    `}
`

export const ContainerGreenRed = styled.View<PropsStyleCard>`
    width: 47.5%;
    justify-content: center;
    align-items: center;

    gap: 8px;
    padding: 16px;

    border-radius: 8px;

    background-color: ${({ theme, color }) => color === 'GREEN' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`