export interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }
  
  const initialProduct: Product[] = [
    {
      id: 1,
      name: "bùn",
      price: 2000,
      quantity: 2,
    },
    {
      id: 2,
      name: "chỉnh",
      price: 2000,
      quantity: 3,
    },
  ];
  
  const reducerProduct = (state = initialProduct, action: any): Product[] => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default reducerProduct;