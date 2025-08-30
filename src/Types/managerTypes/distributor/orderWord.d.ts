interface IOrderWork {
  id: string;
  product: string;
  address: string;
  status: string;
  mobile: string;
}

export type TOrderWork = IOrderWork[];
