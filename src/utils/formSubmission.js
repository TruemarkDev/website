export const createFormFieldsSubmissionData = (
  data,
  files = [],
  filesKey = 'attachments'
) => {
  const formData = new FormData();

  if (files.length) {
    for (const file of files) {
      formData.append(`form[${filesKey}][]`, file);
    }
  }

  Object.entries(data).forEach(([key, value]) => {
    if (value === null || value === undefined) return;

    if (Array.isArray(value)) {
      value.forEach((item) => {
        const formattedValue =
          typeof item === 'object' ? JSON.stringify(item) : item;
        formData.append(`form[${key}][]`, formattedValue);
      });
    } else if (typeof value === 'object') {
      formData.append(`form[${key}]`, JSON.stringify(value));
    } else {
      formData.append(`form[${key}]`, value);
    }
  });

  return formData;
};
