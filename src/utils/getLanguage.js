/**
 * returns a boolean based on the browsers default language (true for spanish and false for english)
 * @returns boolean
 */
export const getLanguage = () => {
  const lang = navigator.language;
  switch (lang) {
    case lang.includes("en"):
      return false;
    case lang.includes("es"):
      return true;
    default:
      return false;
  }
};
