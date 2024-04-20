import { Header } from "@components/header";
import { Container, DotContainer, DotTitle, Title, Subtitle, Time, Dot, ButtonContainer } from "./styles";
import { BigBg } from "@components/bigBg";
import { ButtonIcon } from "@components/buttonIcon";

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
                        <Dot/>
                        <DotTitle>dentro da dieta</DotTitle>
                </DotContainer>

                <ButtonContainer>
                    <ButtonIcon title="Editar refeição" icon="edit"/>
                    <ButtonIcon type="secondary" title="Excluir refeição" icon="delete"/>
                </ButtonContainer>
            </BigBg>
        </Container>
    )
}