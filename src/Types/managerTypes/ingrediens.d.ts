interface IIngredient {
  name: string;
  status: string;
  expirationDate: string;
  quantity: string;
}

export type TIngredient = IIngredient[];
