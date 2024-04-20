import { Container } from "./styles";
import { Header } from "./components/header";
import { PercentBox } from "@components/percent";
import { Meals } from "./components/meals";

export function Home() {
    return(
        <Container>
            <Header/>
            <PercentBox/>
            <Meals/>
        </Container>
    )
}
