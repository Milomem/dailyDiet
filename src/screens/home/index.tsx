import { Button } from "@components/button";
import { Container } from "./styles";
import { ButtonIcon } from "@components/buttonIcon";

export function Home() {
    return(
        <Container>
            <ButtonIcon icon="add" title="Nova refeição"/>
            <Button title="Button"/>
        </Container>
    )
}
