import { Image } from "react-native";
import { ButtonContainer, Container, ContainerImage, Description, Span, Title } from "./styles";
import { Button } from "@components/button";

import illustration from '@assets/Illustration.png'
import negative from '@assets/negative.png'

 export type RouteParams = {
    feedback: 'positive' | 'negative';
  }

export function Feedback() {
    
    const { feedback } = route.params as RouteParams;

    return (
        <Container>
            { feedback === 'positive' ? (
                <>
                    <Title feedback={feedback}>Continue assim!</Title>
                    <Description>
                    Você continua {' '}
                        <Span>dentro da dieta</Span>
                        . Muito bem! 
                    </Description>
                            
                    <ContainerImage source={illustration}/>
             </>
            ): (
                <>
                <Title feedback={feedback}>Que pena!</Title>
                    <Description>
                    Você {' '}
                        <Span>saiu da dieta</Span>
                        {' '}
                        dessa vez, mas continue se esforçando e não desista!
                    </Description>
                            
                    <ContainerImage source={negative}/>
                </>
            )}
            
            <ButtonContainer>
                <Button title="Ir para a página inicial"/>
            </ButtonContainer>
        </Container>
    )
}   