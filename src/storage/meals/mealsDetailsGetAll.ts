import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEALS_DETAIL } from "@storage/storageConfig";

export type MealDetail = {
    total: number;
    inDiet: number;
    outDiet: number;
    streak: number;
    bestStreak: number;
    percentage: number;
}


export async function mealsDetailsGetAll() {

    try{
        const storage = await AsyncStorage.getItem(MEALS_DETAIL);

        const details: MealDetail = storage ? JSON.parse(storage) : {};

        return details;
    } catch (error) {
        throw error;
    }
}