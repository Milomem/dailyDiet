import { MealDetail, mealsDetailsGetAll } from "@storage/meals/mealsDetailsGetAll";
import { Card, CardGreenRed } from "../card";
import { CardContainer, Container, Title } from "./styled";
import { useCallback, useState } from "react";
import { Alert } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

export function GeneralStatistic() {
    const [ detailsMeals, setDetailsMeals] = useState<MealDetail>();

    async function fetchMeals() {
        try {
          const data = await mealsDetailsGetAll();
          setDetailsMeals(data)

        } catch (error) {
          Alert.alert('Falha ao carregar', 'Não foi possível carregar as estatísticas');
          console.log(error);

        } 
      }

      useFocusEffect(useCallback(() => {
        fetchMeals()
      },[]))

    return (
        <Container>
            <Title>Estatísticas gerais</Title>
            <Card  percent={detailsMeals?.bestStreak} />
            <Card percent={detailsMeals?.total} />
            <CardContainer>
                <CardGreenRed color="GREEN" percent={detailsMeals?.inDiet}/>
                <CardGreenRed color="RED" percent={detailsMeals?.outDiet}/>
            </CardContainer>
        </Container>
    )
}