import { useNavigation } from "@react-navigation/native";

import { Bar, Container, ContainerDot, Dot, PropsStyleDot, Time, Title } from "./styles";

type Props = PropsStyleDot & {
    time: string;
    nome: string;
    id: string;
    description: string
}

export function MealsCard( { color, time, nome, id, description } : Props) {
    const navigation = useNavigation();

    function handleOpenMeals(id: string) {
        navigation.navigate('meals', { id, description, time, nome, color})
      }

    return (
        <Container onPress={()=> handleOpenMeals(id)}>
            <Time>{time}</Time>
            <Bar />
            <ContainerDot>
                <Title>{nome}</Title>
                <Dot color={color} />
            </ContainerDot>
        </Container>
    )
}