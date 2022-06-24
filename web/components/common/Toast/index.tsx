interface ToastProps {
    toast: Function
    message: string
    status: 'info' | 'warning' | 'success' | 'error'
  }
  
  const showToast = ({ toast, message, status }: ToastProps) => {
    toast({
      title: message,
      status: status,
      position: 'top',
      duration: 5000,
      isClosable: true,
    })
  }
  
  export const showSuccessToast = (toast: Function, message: string) => {
    showToast({ toast: toast, message: message, status: 'success' })
  }
  
  export const showErrorToast = (toast: Function, message: string) => {
    showToast({ toast: toast, message: message, status: 'error' })
  }
  