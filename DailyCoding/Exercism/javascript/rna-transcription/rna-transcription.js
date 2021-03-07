//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const decodeDNA = (nucleotide) => {
  switch (nucleotide) {
    case "G":
      return "C";
    case "C":
      return "G";
    case "T":
      return "A";
    case "A":
      return "U";
    default:
      return "";
  }
};

export const toRna = (dna) => {
  return dna.split("").map(decodeDNA).join("");
};
