import { ButtonIcon } from "@components/buttonIcon";
import { Container, Date, Title } from "./styles";
import { MealsCard } from "@components/mealsCard";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Alert, SectionList } from "react-native";
import { mealsGetAll } from "@storage/meals/mealsGetAll";
import { Loading } from "@components/loading";
import { DotStyleTypeProps } from "@components/mealsCard/styles";

export function Meals() {

    const DATA: { date: string, data: { nome: string, description: string, time: string, color: DotStyleTypeProps }[] }[] = [
      {
        date: '12.08.22',
        data: [
          {
          nome: 'X-tudo',
          description: 'xis completo da lancheria do bairro',
          time: '12:00',
          color: 'GREEN'
        },
        {
          nome: 'X-nada',
          description: 'xis completo da lancheria do bairro',
          time: '12:00',
          color: 'RED'
        },
      
      ]
      },
    ] 

    const [isLoading, setIsLoading] = useState(true);
    const [meals, setMeals] = useState<string[]>([]);

    const navigation = useNavigation();


    async function fetchGroups() {
        try {
          setIsLoading(true);
          const data = await mealsGetAll();
          setMeals(data)

        } catch (error) {
          Alert.alert('Turmas', 'Não foi possível carregar as turmas');
          console.log(error);

        } finally {
          setIsLoading(false);
        } 
      }

    function handleNavigateToCreateMeal() {
        navigation.navigate('makeMeals');
    }

    useFocusEffect(useCallback(() => {
        fetchGroups()
      },[]))

    return (
        <Container>
            <Title>Refeições</Title>
            <ButtonIcon onPress={handleNavigateToCreateMeal} icon="add" title="Nova refeição"/>
            {isLoading ? <Loading/> : 
                <SectionList
                    sections={DATA}
                    keyExtractor={(item, index) => item.description + index}
                    renderItem={({item}) => <MealsCard time={item.time} nome={item.nome} color={item.color}/>}
                    renderSectionHeader={({section: {date}}) => <Date>{date}</Date>}
                />
            }
        </Container>
    )
}