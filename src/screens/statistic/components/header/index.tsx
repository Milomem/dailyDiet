import { useNavigation } from "@react-navigation/native";
import { BackButton, Container, Description, Icon, Percent } from "./styled";

interface HeaderProps {
    detailsMeals: number;

}

export function Header({detailsMeals}: HeaderProps) {
    const navigation = useNavigation();

    function handleNavigateGoBack() {
        navigation.goBack();
    }

    return (
        <Container>
            <BackButton onPress={handleNavigateGoBack}>
                <Icon />
            </BackButton>
            <Percent>{detailsMeals.toFixed(2)}%</Percent>
            <Description>das refeições dentro da dieta</Description>
        </Container>
    )
}