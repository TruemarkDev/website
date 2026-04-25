import toast from "react-hot-toast"

class ToastService {
  static async processPromise(promise, options = {}) {
    const {
      successMessage = 'Thank you! Your message has been successfully sent.',
      errorMessage = 'There seems to be some error. Please try again!',
      reloadPage = true,
    } = options;

    try {
      const result = await promise;
      this.showSuccessToast(successMessage);
      return result;
    } catch (error) {
      this.showErrorToast(errorMessage);
    } finally {
      if (reloadPage) {
        setTimeout(() => {
          window.location.reload();      
        }, 2000);
      }
    }
  }

  static showSuccessToast(message) {
    toast.success(message, {
        style: {
            backgroundColor: '#e8f5ea'
        }
    });
  }

  static showErrorToast(message) {
    toast.error(message, {
        style: {
            backgroundColor: '#fee7e7'
        }
    });
  }
}

export default ToastService;