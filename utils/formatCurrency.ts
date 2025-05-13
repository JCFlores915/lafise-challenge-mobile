// utils/formatCurrency.ts

/**
 * Formatea un número o string numérico como moneda con símbolo y separadores.
 * Ejemplo: 1000 -> "C$1,000.00"
 *
 * @param amount El monto a formatear (puede ser número o string).
 * @param currencySymbol El símbolo de la moneda a prefijar. Default: "C$".
 * @param locale La localización para el formato de número (separadores). Default: "es-NI" (Nicaragua).
 * @param minimumFractionDigits Mínimo de decimales. Default: 2.
 * @param maximumFractionDigits Máximo de decimales. Default: 2.
 * @returns El monto formateado como string, o un string vacío si el monto no es válido.
 */
export function formatCurrency(
  amount: number | string | undefined | null,
  currencySymbol: string = 'C$',
  locale: string = 'es-NI', // Nicaragua usa ',' como separador de miles y '.' como decimal
  minimumFractionDigits: number = 2,
  maximumFractionDigits: number = 2
): string {
  if (amount === null || amount === undefined) {
    // Podrías retornar 'C$0.00' o lo que consideres apropiado para valores nulos/undefined
    return `${currencySymbol}${Number(0).toLocaleString(locale, { minimumFractionDigits, maximumFractionDigits })}`;
  }

  const numericAmount = typeof amount === 'string' ? parseFloat(amount.replace(/[^0-9.-]+/g, "")) : amount;

  if (isNaN(numericAmount)) {
    // Manejar el caso donde la conversión a número falla
    // Devolver un valor por defecto o lanzar un error según la necesidad.
    // Para la UI, un valor por defecto es usualmente mejor.
    return `${currencySymbol}${Number(0).toLocaleString(locale, { minimumFractionDigits, maximumFractionDigits })}`;
  }

  try {
    const formattedNumber = numericAmount.toLocaleString(locale, {
      minimumFractionDigits,
      maximumFractionDigits,
    });
    return `${currencySymbol}${formattedNumber}`;
  } catch (error) {
    // En caso de que el locale sea inválido o haya otro error con toLocaleString
    console.error("Error formatting currency:", error);
    // Fallback a un formato simple
    return `${currencySymbol}${numericAmount.toFixed(minimumFractionDigits)}`;
  }
}

/**
 * Formatea un número o string numérico para visualización con separadores.
 * No incluye el símbolo de moneda.
 * Ejemplo: 1000 -> "1,000.00"
 *
 * @param amount El monto a formatear (puede ser número o string).
 * @param locale La localización para el formato de número. Default: "es-NI".
 * @param minimumFractionDigits Mínimo de decimales. Default: 2.
 * @param maximumFractionDigits Máximo de decimales. Default: 2.
 * @returns El número formateado como string, o un string vacío si el monto no es válido.
 */
export function formatDisplayNumber(
  amount: number | string | undefined | null,
  locale: string = 'es-NI',
  minimumFractionDigits: number = 2,
  maximumFractionDigits: number = 2
): string {
  if (amount === null || amount === undefined) {
    return Number(0).toLocaleString(locale, { minimumFractionDigits, maximumFractionDigits });
  }

  const numericAmount = typeof amount === 'string' ? parseFloat(amount.replace(/[^0-9.-]+/g, "")) : amount;

  if (isNaN(numericAmount)) {
    return Number(0).toLocaleString(locale, { minimumFractionDigits, maximumFractionDigits });
  }

  try {
    return numericAmount.toLocaleString(locale, {
      minimumFractionDigits,
      maximumFractionDigits,
    });
  } catch (error) {
    console.error("Error formatting display number:", error);
    return numericAmount.toFixed(minimumFractionDigits);
  }
}

/**
 * Parsea un string de moneda formateada a un número.
 * Ejemplo: "C$1,000.50" -> 1000.50
 *
 * @param formattedAmount El string de moneda formateada.
 * @returns El número parseado, o NaN si no se puede parsear.
 */
export function parseCurrency(formattedAmount: string): number {
  if (!formattedAmount || typeof formattedAmount !== 'string') {
    return NaN;
  }
  // Elimina caracteres no numéricos excepto el punto decimal y el signo negativo.
  // Es importante considerar el separador decimal del locale si es diferente al punto.
  // Esta regex es genérica para punto como decimal.
  // Para 'es-NI' donde la coma es separador de miles y punto es decimal, funciona bien.
  // Si el locale usara coma como decimal, necesitarías reemplazarla por punto ANTES de parseFloat.
  const numericString = formattedAmount.replace(/[^0-9.-]+/g, "");
  return parseFloat(numericString);
}

/**
 * Función simple para obtener solo la parte numérica de un input de moneda.
 * Ejemplo: si el usuario escribe "C$ 1.234,56" (formato europeo)
 *          y el locale es 'es-ES', primero se quita el C$, luego se procesa.
 * Esta función es más para limpiar la entrada del usuario.
 *
 * @param value El valor del input.
 * @returns Un string que representa el número, o un string vacío.
 */
export function getNumericString(value: string): string {
  if (!value) return "";
  // Elimina todo lo que no sea dígito, punto o coma (para permitir ambos como entrada temporal)
  // La validación final y conversión a número debe manejar el separador decimal correcto.
  return value.replace(/[^0-9.,]+/g, "");
}