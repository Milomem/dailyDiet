import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { StatisticButton, Container, Description, Icon, Percent } from "./styles";
import { useCallback, useState } from "react";
import { MealDetail, mealsDetailsGetAll } from "@storage/meals/mealsDetailsGetAll";
import { Alert } from "react-native";

export function PercentBox() {
    const [ detailsMeals, setDetailsMeals] = useState<MealDetail>();
    
    const navigation = useNavigation();

    function handleNavigateToStatistics() {
        navigation.navigate('statistics');
    }


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
            <StatisticButton
            onPress={handleNavigateToStatistics}
            >
                <Icon/>
            </StatisticButton>
            <Percent>{detailsMeals?.percentage.toFixed(2)}%</Percent>
            <Description>das refeições dentro da dieta</Description>
        </Container>
    )
}