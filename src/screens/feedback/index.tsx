import { Image } from "react-native";
import { Container, Description, Span, Title } from "./styles";
import { Button } from "@components/button";

export function Feedback() {
    return (
        <Container>
            <Title>Obrigado!</Title>
            <Image source={require('../../assets/images/feedback.png')}/>
            <Description>
            Você continua 
                <Span>dentro da dieta</Span>
                . Muito bem! 
            </Description>
            <Button title="Ir para a página inicial"/>
        </Container>
    )
}   