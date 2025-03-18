import { defineStore } from "pinia";
import PrimaGold from "@/public/images/prima_gold.jpg";
import PrimaGoldRewards from "@/public/images/prima_gold_rewards.jpg";
import PrimaSilver from "@/public/images/prima_silver.jpg";
import PrimaSilverRewards from "@/public/images/prima_silver_rewards.jpg";
import Lifesaver from "@/public/images/lifesaver.jpg";
import LifesaverPlus from "@/public/images/lifesaver_plus.jpg";
import TriShield9Health from "@/public/images/trishield_9_health.jpg";
import TriShield9Life from "@/public/images/trishield_9_life.jpg";
import HealthEase from "@/public/images/healthease.jpg";

export const useStore = defineStore(
  "useStore",
  () => {
    const products = reactive({
      maxicare: [
        {
          id: 1,
          title: "Prima Gold",
          description:
            "Unlimited access to over 800 prescribed lab tests, diagnostics, and consultations in all Maxicare Primary Care Clinics (PCCs) for individuals of all ages, including Seniors",
          amount: "16,000",
          image: PrimaGold,
          rewards: PrimaGoldRewards,
          type: "maxicare",
        },
        {
          id: 2,
          title: "Prima Silver",
          description:
            "Maxicare PRIMA Silver - Unlimited lab tests, diagnostics and consultations for individuals 0 to 59 years old",
          amount: "12,000",
          image: PrimaSilver,
          rewards: PrimaSilverRewards,
          type: "maxicare",
        },
        {
          id: 3,
          title: "Lifesaver",
          description:
            "Outpatient Emergency coverage in Maxicare partner hospitals nationwide",
          amount: "2,299",
          image: Lifesaver,
          rewards: "",
          type: "maxicare",
        },
        {
          id: 4,
          title: "LifesaverPlus",
          description:
            "Emergency coverage leading to confinement throughout Maxicare partner",
          amount: "6,999",
          image: LifesaverPlus,
          rewards: "",
          type: "maxicare",
        },
      ],
      maxilife: [
        {
          id: 3,
          type: "maxilife",
          title: "TriShield 9 Health",
          description:
            "MaxiLife TriShield 9 Health provides cash benefit for 42 critical illnesses, accident or death so you and your loved ones can face life's uncertainties with confidence. Pay for only 3 years and be covered for 9 years!",
          image: TriShield9Health,
          benefits: [
            {
              id: 1,
              name: "Benefits",
              icon: "mdi:shield-check",
              items: [
                {
                  id: 1,
                  name: "Critical Illness Life Benefit",
                },
                {
                  id: 2,
                  name: "Accidental Death, Disability & Dismemberment Rider",
                },
                {
                  id: 3,
                  name: "Daily Hospital Cash Rider",
                },
              ],
              sub_description: "",
            },
            {
              id: 2,
              name: "Coverage",
              icon: "game-icons:sands-of-time",
              items: [
                {
                  id: 1,
                  name: "9 years",
                },
              ],
              sub_description: "",
            },
            {
              id: 3,
              name: "Payment",
              icon: "material-symbols:calendar-today-outline",
              items: [
                {
                  id: 1,
                  name: "3 years",
                },
              ],
              sub_description: "",
            },
            {
              id: 4,
              name: "For As Low As",
              icon: "mdi:tag-multiple",
              items: [
                {
                  id: 1,
                  name: "Php 2,605 per year",
                },
              ],
              sub_description: "Subject to evaluation and change",
            },
          ],
          amount: 2605,
        },
        {
          id: 4,
          type: "maxilife",
          title: "TriShield 9 Life",
          description:
            "MaxiLife TriShield 9 Life ensures your loved ones' financial security in case of your untimely demise. Pay for only 3 years and be covered for 9 years!",
          image: TriShield9Life,
          benefits: [
            {
              id: 1,
              name: "Benefits",
              icon: "mdi:shield-check",
              items: [
                {
                  id: 1,
                  name: "Life Benefit",
                },
                {
                  id: 2,
                  name: "Accidental Death Benefit",
                },
                {
                  id: 3,
                  name: "Waiver of Premium (Due to Disability)",
                },
              ],
              sub_description: "",
            },
            {
              id: 2,
              name: "Coverage",
              icon: "game-icons:sands-of-time",
              items: [
                {
                  id: 1,
                  name: "9 years",
                },
              ],
              sub_description: "",
            },
            {
              id: 3,
              name: "Payment",
              icon: "material-symbols:calendar-today-outline",
              items: [
                {
                  id: 1,
                  name: "3 years",
                },
              ],
              sub_description: "",
            },
            {
              id: 4,
              name: "For As Low As",
              icon: "mdi:tag-multiple",
              items: [
                {
                  id: 1,
                  name: "Php 1,321 per year",
                },
              ],
              sub_description: "Subject to evaluation and change",
            },
          ],
          amount: 1321,
        },
        {
          id: 5,
          type: "maxilife",
          title: "HealthEase",
          description:
            "HealthEase is an affordable plan that offers cash benefit upon diagnosis of any of the 5 covered major critical illnesses such as: Major Cancer, Major Stroke, Heart Attack, Renal Failure, or Chronic Lung Disease.",
          image: HealthEase,
          benefits: [
            {
              id: 1,
              name: "Benefits",
              icon: "mdi:shield-check",
              items: [
                {
                  id: 1,
                  name: "Critical Illness Life Benfit",
                },
              ],
              sub_description: "",
            },
            {
              id: 2,
              name: "Coverage",
              icon: "game-icons:sands-of-time",
              items: [
                {
                  id: 1,
                  name: "Anual",
                },
              ],
              sub_description: "",
            },
            {
              id: 3,
              name: "Payment",
              icon: "material-symbols:calendar-today-outline",
              items: [
                {
                  id: 1,
                  name: "Anual",
                },
              ],
              sub_description: "",
            },
            {
              id: 4,
              name: "For As Low As",
              icon: "mdi:tag-multiple",
              items: [
                {
                  id: 1,
                  name: "Php 488 per year",
                },
              ],
              sub_description: "Subject to evaluation and change",
            },
          ],
          amount: 488,
        },
      ],
    });

    type TDataDisplay = {
      id: number;
      type: string;
      title: string;
      description: string;
      amount: string;
      image: string;
      quantity: number;
      is_gift: boolean;
      email: string;
    };

    const fnSetProduct = (data: TDataDisplay) => (product.value = data);
    const product = ref<TDataDisplay | null>();
    const fnAddQuantity = () => (product.value!.quantity += 1);
    const fnDeductQuantity = () => (product.value!.quantity -= 1);

    return {
      products,
      product,
      fnSetProduct,
      fnAddQuantity,
      fnDeductQuantity,
    };
  },
  {
    persist: {
      storage: localStorage,
      pick: ["product"],
    },
  }
);
