interface IProduction {
  step: string;
  status: string;
  quantity: number;
}

export type TProduction = IProduction[];
