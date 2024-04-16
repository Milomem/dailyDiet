import styled, { css } from "styled-components/native";

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

export const ContainerGreenRed = styled.View`
    width: 47.5%;
    justify-content: center;
    align-items: center;

    gap: 8px;
    padding: 16px;

    border-radius: 8px;

    background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`