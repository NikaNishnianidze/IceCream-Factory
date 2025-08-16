interface IIngredient {
  name: string;
  status: string;
  expirationDate: string;
  quantity: number;
}

export type TIngredient = IIngredient[];
