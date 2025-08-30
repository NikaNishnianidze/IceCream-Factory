interface IOrderHistory {
  id: string;
  product: string;
  date: string;
  status: string;
}

export type TOrderHistory = IOrderHistory[];
