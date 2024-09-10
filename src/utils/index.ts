export const dataURL: string = import.meta.env.PROD
  ? "some-github-url-fix-me-later"
  : `${window.location.origin}/data`;
