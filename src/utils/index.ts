export const dataURL: string = import.meta.env.PROD
  ? "https://raw.githubusercontent.com/jsegal205/jimsegal-com/main/public/data"
  : `${window.location.origin}/data`;

export const sortBy = <T, K extends keyof T>(array: T[], key: K): T[] => {
  const sorted = array.sort(({ [key]: keyA }, { [key]: keyB }) => {
    if (keyA < keyB) {
      return -1;
    }
    if (keyA > keyB) {
      return 1;
    }

    return 0;
  });

  return sorted;
};

export { fahrenheitToCelsius, formatTemperatureDual } from "./temperature";
