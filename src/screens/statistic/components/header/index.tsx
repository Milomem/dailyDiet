import { BackButton, Container, Description, Icon, Percent } from "./styled";

export function Header() {
    return (
        <Container>
            <BackButton>
                <Icon />
            </BackButton>
            <Percent>90,86%</Percent>
            <Description>das refeições dentro da dieta</Description>
        </Container>
    )
}