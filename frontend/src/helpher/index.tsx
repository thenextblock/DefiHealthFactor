
export function formatNumber(
  value: number,
  minimumFractionDigits: number = 2,
  maximumFractionDigits: number = 2,
  locale: string = "en-US"
): string {
  const formatter = new Intl.NumberFormat(locale, {
    minimumFractionDigits: minimumFractionDigits,
    maximumFractionDigits: maximumFractionDigits,
    useGrouping: true, // Enables thousand separators
  });

  return formatter.format(value);
}

export const extractLetters = (input: string): string => {
  const words = input.split(" ");

  if (words.length >= 2) {
    return (words[0].charAt(0) + words[1].charAt(0)).toUpperCase();
  } else {
    return input.substring(0, 2).toUpperCase();
  }
};
