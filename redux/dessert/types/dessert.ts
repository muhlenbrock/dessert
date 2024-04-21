export type DessertType = {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube: string;
};

export type IDessertState = {
  data: DessertType | null;
  isLoading: boolean;
  errors: string;
};

export type DessertStateType = {
  dessert: IDessertState;
  dessertList: IDessertState;
};

export const DESSERT = 'dessert';
export type DESSERT = typeof DESSERT;

export const GET_DESSERT_BY_ID = `${DESSERT}/getDessertByIdAction`;
export type GET_DESSERT_BY_ID = typeof GET_DESSERT_BY_ID;

export const GET_DESSERTS = `${DESSERT}/getDessertsAction`;
export type GET_DESSERTS = typeof GET_DESSERTS;

export type payloadAction = {
  id: number;
};
