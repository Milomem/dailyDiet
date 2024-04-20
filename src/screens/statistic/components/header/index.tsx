import { useNavigation } from "@react-navigation/native";
import { BackButton, Container, Description, Icon, Percent } from "./styled";

export function Header() {
    const navigation = useNavigation();

    function handleNavigateGoBack() {
        navigation.goBack();
    }

    return (
        <Container>
            <BackButton onPress={handleNavigateGoBack}>
                <Icon />
            </BackButton>
            <Percent>90,86%</Percent>
            <Description>das refeições dentro da dieta</Description>
        </Container>
    )
}