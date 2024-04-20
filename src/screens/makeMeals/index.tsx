import { Header } from "@components/header";
import { Container, InputContainer, Title, TitleContainer } from "./styles";
import { Input } from "@components/input";
import { BigBg } from "@components/bigBg";
import { DotButton } from "@components/dotButton";
import { Button } from "@components/button";
import { useNavigation } from "@react-navigation/native";

export function MakeMeals() {
    const navigation = useNavigation();

    function handleNavigateToFeedback() {
        navigation.navigate('feedback');
    }
    
    return(
        <Container>
            <Header />
            <BigBg>
                <Input title="Nome" />
                <Input title="Descrição" type="BIG" />
                <InputContainer>
                    <Input title="Data" size="SMALL"/>
                    <Input title="Hora" size="SMALL"/>
                </InputContainer>

                <TitleContainer>
                    <Title>Esta dentro da dieta?</Title>
                    <InputContainer>
                        <DotButton color="GREEN" title="Sim"/>
                        <DotButton color="RED" title="Não"/>
                    </InputContainer>
                </TitleContainer>

                <Button onPress={handleNavigateToFeedback} title="Cadastrar refeição"/>
            </BigBg>
        </Container>
    )
}