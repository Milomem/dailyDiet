import { TouchableOpacityProps } from "react-native";
import { Container, ContainerDot, Dot, DotStypeTypeProps, PropsStyleDotButton, Title } from "./styles";

type Props = TouchableOpacityProps & PropsStyleDotButton &{
    title: string;
}

export function DotButton( { title, color, isActive = false, ...rest }: Props) {
    return (
        <Container color={color} isActive={isActive} {...rest} >
            <ContainerDot>
                <Dot color={color}/>
                <Title>{title}</Title>
            </ContainerDot>
        </Container>
    )
}