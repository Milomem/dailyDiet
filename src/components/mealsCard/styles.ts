import styled, { css } from "styled-components/native";

export type DotStyleTypeProps = 'GREEN' | 'RED' 

export type PropsStyleDot = {
    color: DotStyleTypeProps;
}

export const Container = styled.TouchableOpacity`
    width: 100%;
    align-items: center;
    justify-content: start;
    flex-direction: row;

    padding-left: 12px;
    padding-right: 16px;
    padding-top: 14px;
    padding-bottom: 14px;

    border: 0.5px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_500};
    border-radius: 6px;

    margin-top: 8px;
`

export const Time = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.XSM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        text-align: center;
    `}
`

export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_200};
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        `}
`

export const Bar = styled.View`
    width: 1px;
    height: 14px;

    border: 0.5px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_400};

    margin-left: 12px;
    margin-right: 12px;
`

export const Dot = styled.View<PropsStyleDot>`
    width: 14px;
    height: 14px;
    background-color: ${({ theme, color }) => color === 'GREEN' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
    border-radius: 99px;
`

export const ContainerDot = styled.View`
    width: 83%;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`