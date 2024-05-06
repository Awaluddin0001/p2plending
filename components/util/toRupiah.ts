/* Setup comma and leading zeros */

interface CommaSettings {
  floatingPoint: number;
  replaceZeroDecimals: boolean;
}

const commaFormatter = (
  nominal: string | null,
  settings: CommaSettings
): string => {
  if (!nominal) {
    nominal = settings.replaceZeroDecimals ? "-" : "00";
  } else {
    const diffLength = settings.floatingPoint - nominal.length;
    if (diffLength > 0) {
      for (let i = 0; i < diffLength; i++) {
        nominal += "0";
      }
    } else if (diffLength < 0) {
      nominal = nominal.slice(0, diffLength);
    }
  }
  return nominal;
};

/* Place dots every three digit start from the most right */

interface DotsSettings {
  dot: string;
  removeZeroDecimals: boolean;
  decimal: string;
  floatingPoint?: number | undefined;
}

const dotsFormatter = (target: string, settings: DotsSettings): string => {
  const angka = target.split(".");
  const size = angka[0].length;
  let result = angka[0].split("");

  for (let i = size - 1; i >= 0; i--) {
    if ((size - i) % 3 === 0 && i > 0) {
      result[i] = settings.dot + result[i];
    }
  }

  const angkaDepan = result.join("");
  if (settings.floatingPoint) {
    if (settings.removeZeroDecimals && !angka[1]) {
      return angkaDepan;
    } else {
      const angkaBelakang = commaFormatter(angka[1] || null, {
        floatingPoint: settings.floatingPoint,
        replaceZeroDecimals: false,
      });
      return settings.floatingPoint > 0
        ? angkaDepan + settings.decimal + angkaBelakang
        : angkaDepan;
    }
  }
  // Provide a default return value in case the conditions above are not met
  return angkaDepan;
};

/* Append or prepend currency symbol based on formal / informal use */

interface SymbolSettings {
  symbol: string;
  formal: boolean;
}

const symbolFormatter = (nominal: string, settings: SymbolSettings): string => {
  if (settings.symbol === "Rp") {
    nominal = settings.formal ? "Rp" + nominal : "Rp " + nominal;
  } else if (settings.symbol === "IDR") {
    nominal = settings.formal ? nominal + " IDR" : "IDR " + nominal;
  }
  return nominal;
};

/* Take 1-3 digit from the left, round the rest with comma, append the unit name */

interface UnitSettings {
  k: boolean;
  useUnit: boolean;
  longUnit: boolean;
  spaceBeforeUnit: boolean;
  floatingPoint?: number | undefined;
  decimal: string;
}

const unitFormatter = (target: string, settings: UnitSettings): string => {
  const units = settings.longUnit
    ? ["ribu", "juta", "milyar", "triliun"]
    : [settings.k ? "k" : "rb", "jt", "M", "T"];
  const unitIndex = Math.ceil(target.length / 3) - 2;

  let nominal: string = "";
  if (settings.floatingPoint) {
    if (unitIndex >= 0 && unitIndex < 4) {
      let unit = units[unitIndex];
      if (settings.spaceBeforeUnit) unit = " " + unit;

      const modDigit = target.length % 3;
      const sliceIndex = modDigit === 0 ? 3 : modDigit;

      nominal = target.substr(0, sliceIndex);

      nominal +=
        (unitIndex >= 0 && settings.floatingPoint > 0 ? settings.decimal : "") +
        target.substr(sliceIndex, settings.floatingPoint) +
        unit;
    } else {
      return dotsFormatter(target, {
        dot: ".",
        removeZeroDecimals: false,
        decimal: ",",
        floatingPoint: settings.floatingPoint,
      });
    }
  }
  // Provide a default return value in case the conditions above are not met
  return nominal;
};

interface DefaultSettings {
  symbol: string;
  formal: boolean;
  dot: string;
  decimal: string;
  floatingPoint: number;
  replaceZeroDecimals: boolean;
  removeZeroDecimals: boolean;
  k: boolean;
  useUnit: boolean;
  longUnit: boolean;
  spaceBeforeUnit: boolean;
}

const defaultSettings: DefaultSettings = {
  symbol: "Rp",
  formal: true,
  dot: ".",
  decimal: ",",
  floatingPoint: 2,
  replaceZeroDecimals: false,
  removeZeroDecimals: false,
  k: false,
  useUnit: false,
  longUnit: false,
  spaceBeforeUnit: false,
};

export default function toRupiah(
  target: string | number,
  settings: Partial<DefaultSettings> & Partial<UnitSettings> = {}
): string {
  target = typeof target !== "string" ? target.toString() : target;
  settings = Object.assign({}, defaultSettings, settings);

  return settings.useUnit
    ? symbolFormatter(
        unitFormatter(target, settings as UnitSettings),
        settings as SymbolSettings
      )
    : symbolFormatter(
        dotsFormatter(target, settings as DotsSettings),
        settings as SymbolSettings
      );
}
