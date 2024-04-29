import { Container, ContainerGreenRed, Description, Percent, PropsStyleCard } from "./styles";

type CardProps = PropsStyleCard & {
  percent: number | undefined;
  total?: boolean;
}

export function Card({ percent, total  }: CardProps) {
  return (
    <Container>
        <Percent>{percent}</Percent>
        <Description>{total === true ? 'melhor sequência de pratos dentro da dieta' : 'refeições registradas'}</Description>
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