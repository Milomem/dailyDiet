import styled, { css } from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    align-items: self-start;
    justify-content: center;
    margin-top: 32px;
`

export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        margin-bottom: 8px;
    `}
`

export const Date = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        margin-top: 32px;
    `}
`