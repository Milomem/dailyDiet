import { useCallback, useState } from "react";
import { GeneralStatistic } from "./components/generalStatistic";
import { Header } from "./components/header";
import { Container } from "./styles";
import { MealDetail, mealsDetailsGetAll } from "@storage/meals/mealsDetailsGetAll";
import { Alert } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

export function Statistic() {
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

      let color = 'green';

      if( !detailsMeals?.percentage) { 
        return
      }

      if ( detailsMeals?.percentage < 50) { 
        color = 'red';
      }
      
    return (
        <Container color={color}>
            <Header detailsMeals={detailsMeals.percentage} />
            <GeneralStatistic />
        </Container>
    )
}