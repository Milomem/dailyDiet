import { Bar, Container, ContainerDot, Dot, PropsStyleDot, Time, Title } from "./styles";

export function MealsCard( { color } : PropsStyleDot) {
    return (
        <Container>
            <Time>20:00</Time>
            <Bar />
            <ContainerDot>
                <Title>X-tudo</Title>
                <Dot color={color} />
            </ContainerDot>
        </Container>
    )
}