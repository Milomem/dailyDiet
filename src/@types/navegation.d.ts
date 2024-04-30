export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            statistics: undefined;
            makeMeals: undefined;
            feedback: { isDiet: boolean};
            meals: { id: string, description: string, time: string, nome: string, color: string};
        }
    }
}