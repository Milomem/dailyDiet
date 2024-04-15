import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";
import { ButtonIconTypeStyleProps } from "@components/buttonIcon/styles";

type Props = TouchableOpacityProps & {
    title: string
    type?: ButtonIconTypeStyleProps
}

export function Button({ title, type='primary'}: Props) {
    return (
        <Container type={type}>
            <Title type={type}>{title}</Title>
        </Container>
    )
}