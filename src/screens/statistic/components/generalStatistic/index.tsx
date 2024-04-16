import { Card, CardGreenRed } from "../card";
import { CardContainer, Container, Title } from "./styled";

export function GeneralStatistic() {
    return (
        <Container>
            <Title>Estatísticas gerais</Title>
            <Card />
            <Card />
            <CardContainer>
                <CardGreenRed/>
                <CardGreenRed/>
            </CardContainer>
        </Container>
    )
}