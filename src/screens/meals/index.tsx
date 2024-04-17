import { Header } from "@components/header";
import { Container, ContainerDot, DotContainer, DotTitle, Title, Subtitle, Time, Dot } from "./styles";
import { BigBg } from "@components/bigBg";

export function Meals () {
    return (
        <Container>
            <Header/>
            <BigBg>
                <Title>Sanduíche</Title>
                <Subtitle>Sanduíche de pão integral com atum e salada de alface e tomate</Subtitle>
                <Time>Data e hora</Time>
                <Subtitle>12/08/2022 às 16:00</Subtitle>
                <DotContainer>
                    <ContainerDot>
                        <Dot/>
                        <DotTitle>200</DotTitle>
                    </ContainerDot>
                </DotContainer>
            </BigBg>
        </Container>
    )
}