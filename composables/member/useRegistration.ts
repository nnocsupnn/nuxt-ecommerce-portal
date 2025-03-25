const useRegistration = () => {
  const tabActive = ref(1);
  const tabItems = reactive([
    {
      key: 1,
      label: "Step 1",
      icon: "material-symbols:barcode",
      content: "Policy/ Reference Code",
      disabled: tabActive.value != 1,
    },
    {
      key: 2,
      label: "Step 2",
      icon: "material-symbols:account-circle-full",
      content: "Member Details",
      disabled: tabActive.value != 2,
    },
    {
      key: 3,
      label: "Step 3",
      icon: "mdi:information-variant-circle-outline",
      content: "Additional Information",
      disabled: tabActive.value != 3,
    },
    {
      key: 4,
      label: "Step 4",
      icon: "ic:twotone-handshake",
      content: "Agreement",
      disabled: tabActive.value != 4,
    },
    {
      key: 5,
      label: "Step 5",
      icon: "simple-icons:welcometothejungle",
      content: "Welcome",
      disabled: tabActive.value != 5,
    },
  ]);

  const fnNext = () => (tabActive.value += 1);
  const fnBack = () => (tabActive.value -= 1);

  return {
    tabActive,
    tabItems,
    fnNext,
    fnBack,
  };
};

export default useRegistration;
