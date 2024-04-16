import { Bar, Container, ContainerDot, Dot, Time, Title } from "./styles";

export function MealsCard() {
    return (
        <Container>
            <Time>20:00</Time>
            <Bar />
            <ContainerDot>
                <Title>X-tudo</Title>
                <Dot />
            </ContainerDot>
        </Container>
    )
}