import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";
import { ButtonIconTypeStyleProps } from "@components/buttonIcon/styles";

type Props = TouchableOpacityProps & {
    title: string
    type?: ButtonIconTypeStyleProps
}

export function Button({ title, type='primary', ...rest}: Props) {
    return (
        <Container {...rest} type={type}>
            <Title type={type}>{title}</Title>
        </Container>
    )
}