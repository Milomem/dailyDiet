import { useNavigation } from "@react-navigation/native";
import { StatisticButton, Container, Description, Icon, Percent } from "./styles";

export function PercentBox() {
    const navigation = useNavigation();

    function handleNavigateToStatistics() {
        navigation.navigate('statistics');
    }

    return (
        <Container>
            <StatisticButton
            onPress={handleNavigateToStatistics}
            >
                <Icon/>
            </StatisticButton>
            <Percent>90,86%</Percent>
            <Description>das refeições dentro da dieta</Description>
        </Container>
    )
}