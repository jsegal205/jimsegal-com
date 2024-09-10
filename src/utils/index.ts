export const dataURL: string = import.meta.env.PROD
  ? "https://raw.githubusercontent.com/jsegal205/jimsegal-com/main/public/data"
  : `${window.location.origin}/data`;
