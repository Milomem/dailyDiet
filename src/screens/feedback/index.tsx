import { Image } from "react-native";
import { ButtonContainer, Container, ContainerImage, Description, Span, Title } from "./styles";
import { Button } from "@components/button";

import illustration from '@assets/Illustration.png'
import negative from '@assets/negative.png'
import { useNavigation, useRoute } from "@react-navigation/native";

 export type RouteParams = {
    isDiet: boolean;
  }

export function Feedback() {
    const navigation = useNavigation();
    const route = useRoute();

    function handleNavigateToHome() {
        navigation.navigate('home');
    }
    
    const { isDiet } = route.params as RouteParams;

    return (
        <Container>
            { isDiet === true ? (
                <>
                    <Title isDiet={isDiet}>Continue assim!</Title>
                    <Description>
                    Você continua {' '}
                        <Span>dentro da dieta</Span>
                        . Muito bem! 
                    </Description>
                            
                    <ContainerImage source={illustration}/>
             </>
            ): (
                <>
                <Title isDiet={isDiet}>Que pena!</Title>
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
                <Button onPress={handleNavigateToHome} title="Ir para a página inicial"/>
            </ButtonContainer>
        </Container>
    )
}   