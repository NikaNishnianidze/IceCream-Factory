interface IOrderHistory {
  id: string;
  product: string;
  date: string;
  status: string;
  address: string;
  mobile: string;
}

export type TOrderHistory = IOrderHistory[];
