import Noty from 'noty';

class NotyService {
  private processNoty: Noty | null = null;
  
  processInit() {
    const noty = new Noty({
      type: 'info',
      text: 'Please wait ..... <br /> Your message is being processed.',
      layout: 'center',
      modal: true,
      closeWith: [],
      progressBar: true,
      id: 'contact-message-processing',
      animation: { open: null },
    });

    this.processNoty = noty;
    noty.show();
  }

  closeInitNoty() {
    this.processNoty?.close?.();
  }

  processSuccess() {
    this.closeInitNoty();
    new Noty({
      type: 'success',
      text: 'Thank You! Your message has been successfully sent.',
      modal: true,
      closeWith: [],
      id: 'contact-message-success',
    }).show();
    this.reloadPage();
  }

  reloadPage() {
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  processFailed() {
    this.closeInitNoty();
    new Noty({
      type: 'error',
      text: 'There seems to be some error. Please try again!',
      timeout: 1000,
    }).show();
  }
}

const notyService = new NotyService();

export default notyService;
