//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (time) => {
  const afterGigaSecond = time.getTime() + Math.pow(10, 9) * 1000;
  return new Date(afterGigaSecond);
};
