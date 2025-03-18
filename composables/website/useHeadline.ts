const useAppBar = () => {
  const modalData = reactive({
    isOpen: false,
    title: ''
  })

  const fnSetModalData = (type: string) => {
    switch (type) {
      case 'signin':
        modalData.title = 'Signin'   
        break;
      case 'new':
        modalData.title = 'Create New Account'   
        break;
    }

    modalData.isOpen = true
  }

  return {
    modalData,
    fnSetModalData
  }
}

export default useAppBar