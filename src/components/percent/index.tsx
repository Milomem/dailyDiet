import { BackButton, Container, Description, Icon, Percent } from "./styles";

export function PercentBox() {
    return (
        <Container>
            <BackButton>
                <Icon/>
            </BackButton>
            <Percent>90,86%</Percent>
            <Description>das refeições dentro da dieta</Description>
        </Container>
    )
}