import { ButtonIcon } from "@components/buttonIcon";
import { Container, Date, Title } from "./styles";
import { MealsCard } from "@components/mealsCard";
import { useNavigation } from "@react-navigation/native";

export function Meals() {
    const navigation = useNavigation();

    function handleNavigateToCreateMeal() {
        navigation.navigate('makeMeals');
    }

    return (
        <Container>
            <Title>Refeições</Title>
            <ButtonIcon onPress={handleNavigateToCreateMeal} icon="add" title="Nova refeição"/>
            <Date>12.08.22</Date>
            <MealsCard color="RED"/>
        </Container>
    )
}