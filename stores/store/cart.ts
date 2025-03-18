import { defineStore } from "pinia";

type TMaxicareDisplay = {
  maxicare: TMaxiCareItem;
};

type TMaxiCareItem = {
  gift: TProductDisplay[];
  not_gift: TProductDisplay[];
};

type TProductDisplay = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  email?: string;
  image: string;
  description: string;
};

export const useCartStore = defineStore(
  "cartStore",
  () => {
    const cart = ref<TMaxicareDisplay>();

    const fnAddProductGift = (data: TProductDisplay) => {
      if (!cart.value) {
        cart.value = {
          maxicare: {
            not_gift: [],
            gift: [data],
          },
        };
      } else {
        // Find the index of the item with the same id
        const index = cart.value?.maxicare.gift.findIndex(
          (item) => item.id === data.id && item.email === data.email
        );

        if (index !== -1) {
          // If the item exists, update the quantity and total
          cart.value!.maxicare.gift[index!].quantity += data.quantity; // Update quantity
          cart.value!.maxicare.gift[index!].total =
            cart.value!.maxicare.gift[index!].price *
            cart.value!.maxicare.gift[index!].quantity; // Update total
        } else {
          // If the item does not exist, add it to the array
          cart.value!.maxicare.gift.push(data);
        }
      }
    };

    const fnAddProductNoneGift = (data: TProductDisplay) => {
      if (!cart.value) {
        cart.value = {
          maxicare: {
            not_gift: [data],
            gift: [],
          },
        };
      } else {
        // Find the index of the item with the same id
        const index = cart.value?.maxicare.not_gift.findIndex(
          (item) => item.id === data.id
        );

        console.log("index", index);

        if (index !== -1) {
          // If the item exists, update the quantity and total
          cart.value!.maxicare.not_gift[index!].quantity += data.quantity; // Update quantity
          cart.value!.maxicare.not_gift[index!].total =
            cart.value!.maxicare.not_gift[index!].price *
            cart.value!.maxicare.not_gift[index!].quantity; // Update total
        } else {
          // If the item does not exist, add it to the array
          cart.value!.maxicare.not_gift.push(data);
        }
      }

      navigateTo("/product/cart");
    };

    const fnGetSummary = computed(() => {
      const { gift, not_gift } = cart.value!.maxicare;

      // Combine both arrays
      const allProducts = [...gift, ...not_gift];

      // Group by id
      const groupedProducts: { [key: number]: TProductDisplay } = {};
      const subTotal = ref<number>(0);

      allProducts.forEach((product) => {
        if (!groupedProducts[product.id]) {
          // If the product id doesn't exist, create a new entry
          groupedProducts[product.id] = {
            ...product,
            quantity: 0,
            total: 0,
          };
        }

        // Update the quantity and total
        groupedProducts[product.id].quantity += product.quantity;
        groupedProducts[product.id].total += product.price * product.quantity;

        subTotal.value += groupedProducts[product.id].total;
      });

      // Convert the grouped object back to an array
      const result = Object.values(groupedProducts);

      return { data: result, subTotal };
    });

    const fnRemoveProduct = (type: string, id: number) => {
      switch (type) {
        case "gift":
          cart.value!.maxicare.gift = cart.value!.maxicare.gift.filter(
            (item) => item.id != id
          );
          break;
        case "notGift":
          cart.value!.maxicare.not_gift = cart.value!.maxicare.not_gift.filter(
            (item) => item.id != id
          );
          break;
      }
    };

    const fnsumQuantities = computed(() => {
      return (
        (cart.value
          ? cart.value!.maxicare.gift.reduce(
              (sum, item) => sum + item.quantity,
              0
            )
          : 0) +
        (cart.value
          ? cart.value!.maxicare.not_gift.reduce(
              (sum, item) => sum + item.quantity,
              0
            )
          : 0)
      );
    });

    return {
      cart,
      fnAddProductGift,
      fnAddProductNoneGift,
      fnRemoveProduct,
      fnsumQuantities,
      fnGetSummary,
    };
  },
  {
    persist: {
      storage: sessionStorage,
      pick: ["cart"],
    },
  }
);
