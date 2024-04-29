import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

type Props = {
    color: string;
}

export const Container = styled(SafeAreaView)<Props>`
    flex: 1;
    margin-bottom: -36px;
    background-color: ${({theme, color}) => color === 'green' ? theme.COLORS.GREEN_LIGHT: theme.COLORS.RED_LIGHT};
`