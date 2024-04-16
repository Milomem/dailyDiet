import { Container, ContainerGreenRed, Description, Percent } from "./styles";

export function Card() {
  return (
    <Container>
        <Percent>4</Percent>
        <Description>melhor sequência de pratos dentro da dieta</Description>
    </Container>
  )
}

export function CardGreenRed() {
  return(
    <ContainerGreenRed>
      <Percent>4</Percent>
      <Description>refeições dentro da dieta</Description>
    </ContainerGreenRed>
  )
}