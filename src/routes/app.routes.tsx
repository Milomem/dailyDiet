import { createStackNavigator } from "@react-navigation/stack"
import { Feedback } from "@screens/feedback"

import { Home } from "@screens/home"
import { MakeMeals } from "@screens/makeMeals"
import { Meals } from "@screens/meals"
import { Statistic } from "@screens/statistic"

const { Navigator, Screen} = createStackNavigator()

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false}}>
            <Screen
            name="home"
            component={Home}
            />

            <Screen
            name="statistics"
            component={Statistic}
            />

            <Screen
            name="makeMeals"
            component={MakeMeals}
            />

            <Screen
            name="feedback"
            component={Feedback}
            />

            <Screen
            name="meals"
            component={Meals}
            />

        </Navigator>
    )
}