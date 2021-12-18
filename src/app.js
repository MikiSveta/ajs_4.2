export default function sortHealth(array) {
  return array.sort((a, b) => (a.health < b.health ? 1 : -1));
}
