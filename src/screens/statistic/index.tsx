import { GeneralStatistic } from "./components/generalStatistic";
import { Header } from "./components/header";
import { Container } from "./styles";

export function Statistic() {
    return (
        <Container>
            <Header />
            <GeneralStatistic />
        </Container>
    )
}