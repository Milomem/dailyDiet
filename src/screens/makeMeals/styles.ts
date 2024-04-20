import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.GRAY_500};
    padding-top: 44px;
`

export const InputContainer = styled.View`
    flex-direction: row;
    gap: 20px;
`

export const TitleContainer = styled.View`
    margin-top: 24px;
    gap: 8px;
    flex: 1;
`

export const Title = styled.Text`
    color: ${({theme}) => theme.COLORS.GRAY_200};
    font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`;