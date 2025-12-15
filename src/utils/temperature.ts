/**
 * Converts Fahrenheit to Celsius
 * Formula: C = (F - 32) × 5/9
 * @param fahrenheit - Temperature in Fahrenheit
 * @returns Temperature in Celsius, rounded to 1 decimal place
 */
export const fahrenheitToCelsius = (fahrenheit: number): number => {
  return Math.round((((fahrenheit - 32) * 5) / 9) * 10) / 10;
};

/**
 * Formats temperature with both F and C units
 * @param fahrenheit - Temperature in Fahrenheit
 * @returns Formatted string like "72°F (22°C)"
 */
export const formatTemperatureDual = (fahrenheit: number): string => {
  const celsius = fahrenheitToCelsius(fahrenheit);
  return `${fahrenheit}°F (${celsius}°C)`;
};
