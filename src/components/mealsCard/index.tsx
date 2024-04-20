import { useNavigation } from "@react-navigation/native";

import { Bar, Container, ContainerDot, Dot, PropsStyleDot, Time, Title } from "./styles";

export function MealsCard( { color } : PropsStyleDot) {
    const navigation = useNavigation();

    function handleNavigateToMeal() {
        navigation.navigate('meals');
    }

    return (
        <Container onPress={handleNavigateToMeal}>
            <Time>20:00</Time>
            <Bar />
            <ContainerDot>
                <Title>X-tudo</Title>
                <Dot color={color} />
            </ContainerDot>
        </Container>
    )
}