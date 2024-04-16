import { BackButton, BackIcon, Container, Title } from "./styles";

export function Header() {

  return (
    <Container>
        <BackButton>
          <BackIcon />
        </BackButton>
        <Title>Nova refeição</Title>
    </Container>
  )
}