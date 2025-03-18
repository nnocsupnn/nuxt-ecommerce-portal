import { useStore } from "~/stores/store/product";
import { useCartStore } from "~/stores/store/cart";

type TDataDisplay = {
  id: number;
  title: string;
  description: string;
  amount: string;
  image: string;
  quantity: number;
  is_gift: boolean;
  email: string;
  type: string;
};

const useProducts = () => {
  const store = useStore();
  const storeCart = useCartStore();

  const fnSetProduct = (id: number, data: TDataDisplay) => {
    store.fnSetProduct(data);
    navigateTo(`/product/${id}`);
  };

  const fnSetProductToCart = (data: {
    id: number;
    title: string;
    amount: string;
    image: string;
    description: string;
  }) => {
    storeCart.fnAddProductNoneGift({
      id: data.id,
      title: data.title,
      price: parseFloat(data.amount.replace(",", "")),
      quantity: 1,
      total: parseFloat(data.amount.replace(",", "")),
      image: data.image,
      description: data.description,
    });
  };

  return {
    fnSetProduct,
    fnSetProductToCart,
  };
};

export default useProducts;
