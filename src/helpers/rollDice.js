export default function rollDice(max, min) {
  const roll = Math.floor(Math.random() * (max - min + 1)) + min;

  return roll;
}
