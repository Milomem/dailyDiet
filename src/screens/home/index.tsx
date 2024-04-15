import { Button } from "@components/button";
import { Container } from "./styles";
import { ButtonIcon } from "@components/buttonIcon";
import { Header } from "./components/header";
import { PercentBox } from "@components/percent";

export function Home() {
    return(
        <Container>
            <Header/>
            <PercentBox/>
        </Container>
    )
}
