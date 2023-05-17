export interface CartItemModal {
  title: string;
  id: number;
  price: number;
  quantity: number;
  image: string;
}

export interface CartModal {
  cartItems: CartItemModal[];
  cartValue: number;
}
