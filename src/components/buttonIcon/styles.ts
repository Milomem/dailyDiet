import styled, { css } from "styled-components/native";

import { TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'

export type ButtonIconTypeStyleProps = 'primary' | 'secondary'

type Props = {
    type: ButtonIconTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
    flex: 1;
    max-height: 50px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
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
    `}
`

export const Icon = styled(MaterialIcons).attrs<Props>(({theme, type}) => ({
    size: 24,
    color: type === 'primary' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1
}))`
    margin-right: 12px;
`

