import { Container, ContainerGreenRed, Description, Percent, PropsStyleCard } from "./styles";

type CardProps = PropsStyleCard & {
  percent: number | undefined;
}

export function Card({ percent }: CardProps) {
  return (
    <Container>
        <Percent>{percent}</Percent>
        <Description>melhor sequência de pratos dentro da dieta</Description>
    </Container>
  )
}

export function CardGreenRed({ percent, color  }: CardProps) {
  return(
    <ContainerGreenRed color={color}>
      <Percent>{percent}</Percent>
      <Description>{color === 'GREEN' ? 'refeições dentro da dieta' : 'refeições fora da dieta' }</Description>
    </ContainerGreenRed>
  )
}