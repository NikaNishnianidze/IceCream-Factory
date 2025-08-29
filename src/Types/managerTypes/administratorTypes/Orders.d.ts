interface Order {
  orderNumber: string;
  product: string;
  fullName: string;
  status: string;
  email: string;
  phone: string;
  role: string;
}

export type TOrder = Order[];
