export const hasDuplicateValueInKey = (obj1: Record<string, any>[], key: string): boolean => {
  const values = obj1.map((obj) => obj[key]);
  return new Set(values).size !== values.length;
};
