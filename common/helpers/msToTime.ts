export const msToTime = (duration: number) => {
  const minutes = Math.floor((duration / (1000 * 60)) % 60);
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  const minutesAsString = minutes < 10 ? '0' + minutes : minutes;
  const hoursAsString = hours < 10 ? '0' + hours : hours;

  return hoursAsString + ':' + minutesAsString;
};
