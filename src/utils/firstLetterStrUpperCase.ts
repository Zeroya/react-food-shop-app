export const firstLetterStrUpperCase = (str: string): string => {
  return str.trim().charAt(0).toUpperCase() + str.slice(1);
};
