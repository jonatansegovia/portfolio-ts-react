export const handleLanguage = (
  language: string,
  engText: string,
  spaText: string
) => {
  const textToShow = language === 'ENG' ? engText : spaText;

  return textToShow;
};
