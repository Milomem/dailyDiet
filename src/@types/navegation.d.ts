export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            statistics: undefined;
            makeMeals: undefined;
            feedback: { isDiet: boolean};
            meals: { id: string };
        }
    }
}