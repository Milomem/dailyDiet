import AsyncStorage from "@react-native-async-storage/async-storage";
import { Meal } from "@screens/home/components/meals";

import { MEALS_COLLECTION } from "@storage/storageConfig";


export async function mealsGetAll() {

    try{
        const storage = await AsyncStorage.getItem(MEALS_COLLECTION);

        const meals: Meal[] = storage ? JSON.parse(storage) : [];

        return meals;
    } catch (error) {
        throw error;
    }
}