import { useStore } from "~/stores/store/product";
import { useCartStore } from "~/stores/store/cart";

const useProductItem = () => {
  const store = useStore();
  const storeCart = useCartStore();

  const fnAddProductToCart = (actionType: string) => {
    switch (store.product?.is_gift) {
      case true:
        storeCart.fnAddProductGift({
          id: store.product!.id,
          title: store.product!.title,
          price: parseFloat(store.product!.amount.replace(",", "")),
          quantity: store.product!.quantity,
          total: parseFloat(store.product!.amount.replace(",", "")),
          email: store.product?.is_gift ? store.product!.email : "",
          image: store.product!.image,
          description: store.product!.description,
        });
        break;
      default:
        storeCart.fnAddProductNoneGift({
          id: store.product!.id,
          title: store.product!.title,
          price: parseFloat(store.product!.amount.replace(",", "")),
          quantity: store.product!.quantity,
          total: parseFloat(store.product!.amount.replace(",", "")),
          email: store.product?.is_gift ? store.product!.email : "",
          image: store.product!.image,
          description: store.product!.description,
        });
        break;
    }

    switch (actionType) {
      case "addToCart":
        navigateTo("/product/cart");
        break;
      case "proceedToCheckOut":
        navigateTo("/product/checkout");
        break;
    }
  };

  return {
    fnAddProductToCart,
  };
};

export default useProductItem;
