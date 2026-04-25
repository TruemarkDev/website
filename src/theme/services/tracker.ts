// Astro migration: replaced gatsby-plugin-google-analytics with a thin gtag forwarder.
const trackCustomEvent = (params: { category?: string; action?: string; label?: string; value?: number }) => {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', params.action || 'event', {
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