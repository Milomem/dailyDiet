import { Header } from "@components/header";
import { Container, DotContainer, DotTitle, Title, Subtitle, Time, Dot, ButtonContainer } from "./styles";
import { BigBg } from "@components/bigBg";
import { ButtonIcon } from "@components/buttonIcon";
import { useNavigation, useRoute } from "@react-navigation/native";
import { mealsRemove } from "@storage/meals/mealsRemove";

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
    
    const { id, description, time, nome, color } = route.params as RouteParamsMeals;

    function handleNavigateToMakeMeals() {
        navigation.navigate('makeMeals');
    }

    async function handleRemoveMeal({id, description, time, nome, color} :RouteParamsMeals) {
        await mealsRemove(id, description, time, nome, color);
        navigation.goBack()
    }


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
                    <ButtonIcon onPress={() => handleRemoveMeal({id, description, time, nome, color})} type="secondary" title="Excluir refeição" icon="delete"/>
                </ButtonContainer>
            </BigBg>
        </Container>
    )
}