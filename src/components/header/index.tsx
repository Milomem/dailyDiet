import { useNavigation } from "@react-navigation/native";
import { BackButton, BackIcon, Container, Title } from "./styles";

export function Header() {
  const navigation = useNavigation();

  function handleNavigateGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
        <BackButton onPress={handleNavigateGoBack}>
          <BackIcon />
        </BackButton>
        <Title>Nova refeição</Title>
    </Container>
  )
}