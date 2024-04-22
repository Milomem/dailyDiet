import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealsGetAll } from "./mealsGetAll";
import { MEALS_COLLECTION } from "@storage/storageConfig";
import { Meal } from "@screens/home/components/meals";

export async function mealsCreate(newMeal: Meal) {
    try {
        const { data, date } = newMeal

        const storedMeals = await mealsGetAll();

        const sameDay = storedMeals.find((meal) => meal.date === date);
        
        if (sameDay) {
            const index = storedMeals.indexOf(sameDay);
            storedMeals.splice(index, 1);
        }
        
        if(sameDay){
            data.forEach(item => sameDay.data.push(item));
        }

        storedMeals.push(sameDay ? sameDay : newMeal);

        const storage =  JSON.stringify([ ...storedMeals ]);
        await AsyncStorage.setItem(MEALS_COLLECTION, storage);

    } catch (error) {
        throw error;
    }
}