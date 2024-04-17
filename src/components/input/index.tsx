import { Container, InputText, Title } from "./styles";

export function Input() {
    return (
        <Container>
            <Title>Nome</Title>
            <InputText placeholder="Digite o nome do prato" />
        </Container>
    )
}