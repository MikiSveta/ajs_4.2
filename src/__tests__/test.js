import sortHealth from '../app';

test('should return sort health', () => {
  const input = [
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
  ];

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const received = sortHealth(input);

  expect(received).toEqual(expected);
});

test('should not toBe', () => {
  const input = [
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
  ];

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const received = sortHealth(input);

  expect(received).not.toBe(expected);
});