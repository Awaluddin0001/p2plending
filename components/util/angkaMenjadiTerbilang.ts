const satuan = (x: string): string => {
  switch (x) {
    case "0":
      return "nol";
    case "1":
      return "satu";
    case "2":
      return "dua";
    case "3":
      return "tiga";
    case "4":
      return "empat";
    case "5":
      return "lima";
    case "6":
      return "enam";
    case "7":
      return "tujuh";
    case "8":
      return "delapan";
    case "9":
      return "sembilan";
    default:
      return "";
  }
};

const puluhan = (xs: string): string => {
  const headX = xs[0];
  const lastX = xs[1];

  if (xs === "10") return "sepuluh";
  else if (xs === "11") return "sebelas";
  else if (headX === "1") return `${satuan(lastX)} belas`;
  else if (headX === "0") return satuan(lastX);
  else if (lastX === "0") return `${satuan(headX)} puluh`;

  return `${satuan(headX)} puluh ${satuan(lastX)}`;
};

const ratusan = (xs: string): string => {
  const headX = xs[0];
  const middleX = xs[1];
  const lastX = xs[2];
  const tailX = middleX + lastX;

  if (xs === "100") return "seratus";
  else if (tailX === "00") return `${satuan(headX)} ratus`;
  else if (headX === "0" || headX === "1") return `seratus ${puluhan(tailX)}`;

  return `${satuan(headX)} ratus ${puluhan(tailX)}`;
};

const pisahAngka = (x: string): string[] => {
  return x
    .split("")
    .reverse()
    .reduce((acc: string[][], curr: string, index: number) => {
      if (index % 3 === 0) {
        acc.push([curr]);
      } else {
        acc[acc.length - 1].unshift(curr);
      }
      return acc;
    }, [])
    .map((arr) => arr.join(""))
    .reverse();
};

export const terbilang = (n: number): string => {
  const m = n.toString();

  if (n === 0) return "nol";

  const result = pisahAngka(m);

  const satuanArray = ["", "ribu", "juta", "milyar", "triliun"];
  let hasil = "";

  result.forEach((val, index) => {
    if (val !== "000") {
      hasil = `${ratusan(val)} ${satuanArray[index]} ${hasil}`;
    }
  });

  return hasil.trim();
};
