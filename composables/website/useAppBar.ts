const useAppBar = () => {
  const modalData = reactive({
    isOpen: false,
    title: ''
  })

  return {
    modalData
  }
}

export default useAppBar