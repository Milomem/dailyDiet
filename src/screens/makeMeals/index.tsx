import { Header } from "@components/header";
import { Input } from "@components/input";
import { BigBg } from "@components/bigBg";
import { DotButton } from "@components/dotButton";
import { Button } from "@components/button";
import { Container, InputContainer, Title, TitleContainer } from "./styles";

import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { Alert } from "react-native";

import { mealsCreate } from "@storage/meals/mealsCreate";
import { AppError } from "@utils/appError";
import { mealsDetailsCreate } from "@storage/meals/mealsDetailsCreate";

export function MakeMeals() {
    const [nome, setNome] = useState('');
    const [description, setDescription] = useState(''); 
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [isDiet, setIsDiet] = useState<boolean>(true);

    const navigation = useNavigation();

    function handleIsDiet() {
        setIsDiet(true);
    }

    function handleIsNotDiet() {
        setIsDiet(false);
    }

    async function handleCreateMeal() {
        try {
            if( nome.trim().length === 0 || description.trim().length === 0 || 
            date.trim().length === 0 || time.trim().length === 0 || isDiet === undefined) {
                return Alert.alert('Nova Refeição','Preencha todos os campos');
            }
            await mealsCreate({date, data: [{id: date, nome, description, time, color: isDiet ? 'GREEN' : 'RED'}]});

            await mealsDetailsCreate( isDiet)

            navigation.navigate('feedback',{isDiet});

        } catch (error) {
            if( error instanceof AppError) {
                Alert.alert('Nova Refeição', error.message);
            } else {
                Alert.alert('Nova Refeição','Erro ao cadastrar refeição');
        }
        }
    }
    
    return(
        <Container>
            <Header />
            <BigBg>
                <Input title="Nome" onChangeText={setNome}/>
                <Input title="Descrição" type="BIG" onChangeText={setDescription} />
                <InputContainer>
                    <Input title="Data" size="SMALL" onChangeText={setDate}/>
                    <Input title="Hora" size="SMALL" onChangeText={setTime}/>
                </InputContainer>

                <TitleContainer>
                    <Title>Esta dentro da dieta?</Title>
                    <InputContainer>
                        <DotButton color="GREEN" title="Sim" onPress={handleIsDiet} isActive={isDiet}/>
                        <DotButton color="RED" title="Não" onPress={handleIsNotDiet} isActive={!isDiet}/>
                    </InputContainer>
                </TitleContainer>

                <Button onPress={handleCreateMeal} title="Cadastrar refeição"/>
            </BigBg>
        </Container>
    )
}