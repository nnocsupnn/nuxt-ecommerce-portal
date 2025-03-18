export const moneyFormat = (text: number): string => {
  const value = typeof text == 'string' ? parseInt(text) : text;

  return value.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};