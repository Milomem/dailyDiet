import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_DETAIL } from "@storage/storageConfig";
import { MealDetail, mealsDetailsGetAll } from "./mealsDetailsGetAll";

export async function mealsDetailsCreate(color: boolean) {
    try {
        const mealsDetails = await mealsDetailsGetAll()

        if(color === true) {
            mealsDetails.inDiet += 1
            mealsDetails.streak += 1

            mealsDetails.bestStreak = mealsDetails.streak > mealsDetails.bestStreak ? mealsDetails.streak : mealsDetails.bestStreak
        } else {
            mealsDetails.outDiet += 1
            mealsDetails.streak = 0
        }

        const storageDetails = JSON.stringify( mealsDetails);

        await AsyncStorage.setItem(MEALS_DETAIL, storageDetails );

    } catch (error) {
        throw error;
    }
}