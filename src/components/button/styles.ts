import { ButtonIconTypeStyleProps } from "@components/buttonIcon/styles";

import { TouchableOpacity, Text } from "react-native";
import styled, { css } from "styled-components/native";

type Props = {
    type: ButtonIconTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
    width: 100%;
    height: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    background-color: ${({theme, type}) => type === 'primary' ? theme.COLORS.GRAY_200 : theme.COLORS.WHITE};
    border-width: ${({type}) => type === 'primary' ? null : 1};
    border-color: ${({ theme, type}) => type === 'primary' ? null : theme.COLORS.GRAY_100}; ;
`

export const Title = styled(Text)<Props>`
    ${({theme, type}) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${type === 'primary' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.BOLD};
        text-align: center;
    `}
`