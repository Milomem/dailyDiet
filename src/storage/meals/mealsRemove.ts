import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealsGetAll } from "./mealsGetAll";
import { MEALS_COLLECTION } from "@storage/storageConfig";

export async function mealsRemove(id: string, description: string, time: string, nome: string, color: string) {
    const allMeals = await mealsGetAll();

    const meals = allMeals.filter(meal => meal.date !== id || meal.data.forEach(item => item.nome !== nome ) );

    await AsyncStorage.setItem( MEALS_COLLECTION, JSON.stringify(meals));
}