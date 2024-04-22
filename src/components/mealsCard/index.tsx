import { useNavigation } from "@react-navigation/native";

import { Bar, Container, ContainerDot, Dot, PropsStyleDot, Time, Title } from "./styles";

type Props = PropsStyleDot & {
    time: string;
    nome: string;
}

export function MealsCard( { color, time, nome } : Props) {
    const navigation = useNavigation();

    function handleNavigateToMeal() {
        navigation.navigate('meals');
    }

    return (
        <Container onPress={handleNavigateToMeal}>
            <Time>{time}</Time>
            <Bar />
            <ContainerDot>
                <Title>{nome}</Title>
                <Dot color={color} />
            </ContainerDot>
        </Container>
    )
}