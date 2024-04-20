import { Header } from "@components/header";
import { Container, DotContainer, DotTitle, Title, Subtitle, Time, Dot, ButtonContainer } from "./styles";
import { BigBg } from "@components/bigBg";
import { ButtonIcon } from "@components/buttonIcon";

export type RouteParams = {
    feedback: 'positive' | 'negative';
  }

export function Meals () {
    const { feedback } = route.params as RouteParams;

    return (
        <Container feedback={feedback} >
            <Header/>
            <BigBg>
                <Title>Sanduíche</Title>
                <Subtitle>Sanduíche de pão integral com atum e salada de alface e tomate</Subtitle>

                <Time>Data e hora</Time>
                <Subtitle>12/08/2022 às 16:00</Subtitle>

                <DotContainer>
                        <Dot feedback={feedback}/>
                        {feedback === 'positive' ? <DotTitle>dentro da dieta</DotTitle> :
                         <DotTitle>fora da dieta</DotTitle>}
                </DotContainer>

                <ButtonContainer>
                    <ButtonIcon title="Editar refeição" icon="edit"/>
                    <ButtonIcon type="secondary" title="Excluir refeição" icon="delete"/>
                </ButtonContainer>
            </BigBg>
        </Container>
    )
}