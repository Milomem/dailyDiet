import { ButtonIcon } from "@components/buttonIcon";
import { Container, Date, Title } from "./styles";
import { MealsCard } from "@components/mealsCard";

export function Meals() {
    return (
        <Container>
            <Title>Refeições</Title>
            <ButtonIcon icon="add" title="Nova refeição"/>
            <Date>12.08.22</Date>
            <MealsCard/>
        </Container>
    )
}