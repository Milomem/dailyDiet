import { Container } from "./styles";

export function BigBg( { children } : { children: React.ReactNode }) {
    return (
        <Container>
            {children}
        </Container>
    )
}