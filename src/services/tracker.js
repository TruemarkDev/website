const trackCustomEvent = (params) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', params.action || 'event', {
      event_category: params.category,
      event_label: params.label,
      value: params.value,
    });
  }
};

class Tracker {
  static trackOpenContactForm() {
    trackCustomEvent({
      category: 'Button:Contact Us:Open',
      action: 'Click',
      label: 'Project Starter Story',
    });
  }

  static trackCloseContactForm() {
    trackCustomEvent({
      category: 'Button:Contact Us:Close',
      action: 'Click',
      label: 'Project Starter Story',
    });
  }

  static trackSubmitContactForm() {
    trackCustomEvent({
      category: 'Button: Contact Us:Submit',
      action: 'Click',
      label: 'Project Starter Story',
    });
  }
}

export default Tracker;
