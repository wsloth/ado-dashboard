export const formatDate = date => {
  const d = new Date(date);
  const options = {
    day: 'numeric',
    month: 'long',
  };

  return d.toLocaleDateString(undefined, options);
};

export const formatDateTime = date => {
  const d = new Date(date);
  const options = {
    day: 'numeric',
    month: 'long',
    hour: 'numeric',
    minute: 'numeric',
  };

  return d.toLocaleDateString(undefined, options);
};
