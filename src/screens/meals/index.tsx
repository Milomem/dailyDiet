import { Header } from "@components/header";
import { Container, DotContainer, DotTitle, Title, Subtitle, Time, Dot, ButtonContainer } from "./styles";
import { BigBg } from "@components/bigBg";
import { ButtonIcon } from "@components/buttonIcon";
import { useNavigation, useRoute } from "@react-navigation/native";

export type RouteParamsMeals = {
    id: string;
    description: string;
    time: string;
    nome: string;
    color: string;
  }

export function Meals () {
    const navigation = useNavigation();
    const route = useRoute();

    function handleNavigateToMakeMeals() {
        navigation.navigate('makeMeals');
    }

    const { id, description, time, nome, color } = route.params as RouteParamsMeals;

    return (
        <Container color={color}>
            <Header/>
            <BigBg>
                <Title>{nome}</Title>
                <Subtitle>{description}</Subtitle>

                <Time>Data e hora</Time>
                <Subtitle>{id} às {time}</Subtitle>

                <DotContainer>
                        <Dot color={color}/>
                        {color === 'GREEN' ? <DotTitle>dentro da dieta</DotTitle> :
                         <DotTitle>fora da dieta</DotTitle>}
                </DotContainer>

                <ButtonContainer>
                    <ButtonIcon onPress={handleNavigateToMakeMeals} title="Editar refeição" icon="edit"/>
                    <ButtonIcon type="secondary" title="Excluir refeição" icon="delete"/>
                </ButtonContainer>
            </BigBg>
        </Container>
    )
}