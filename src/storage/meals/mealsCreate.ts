import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealsGetAll } from "./mealsGetAll";
import { MEALS_COLLECTION } from "@storage/storageConfig";
import { Meal } from "@screens/home/components/meals";

export async function mealsCreate(newMeal: Meal) {
    try {
        const storedMeals = await mealsGetAll();
        
        const storage =  JSON.stringify([...storedMeals, newMeal]);
        await AsyncStorage.setItem(MEALS_COLLECTION, storage);

    } catch (error) {
        throw error;
    }
}