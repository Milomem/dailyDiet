import styled from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.WHITE};
    padding: 24px;
    margin-top: 32px;
`