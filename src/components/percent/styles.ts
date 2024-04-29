import { ArrowLeft, ArrowUpRight } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export type ContainerStyleProps = {
    color: string;
}

export const Container = styled.View<ContainerStyleProps>`
    width: 100%;
    height: 102px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme,color }) => color === 'green' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    border-radius: 8px;
    padding: 20px 16px;
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
    `}
`

export const Icon = styled(ArrowUpRight).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.GREEN_DARK,
}))`
`

export const ContainerHeader = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
`

export const Button = styled.TouchableOpacity`
  flex: 1;
  align-self: flex-end;
`;

export const IconBack = styled(ArrowLeft).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.GREEN_DARK,
}))`
`

export const StatisticButton = styled.TouchableOpacity`
  flex: 1;
  align-self: flex-end;
`;