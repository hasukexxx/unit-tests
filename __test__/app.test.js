import getHealthStatus from '../src/app';

describe('getHealthStatus', () => {
  test('should return "healthy" when health > 50', () => {
    const character = { name: 'Маг', health: 90 };
    expect(getHealthStatus(character)).toBe('healthy');
  });

  test('should return "wounded" when health is between 15 and 50 (inclusive)', () => {
    expect(getHealthStatus({ name: 'Воин', health: 50 })).toBe('wounded');
    expect(getHealthStatus({ name: 'Лучник', health: 30 })).toBe('wounded');
    expect(getHealthStatus({ name: 'Целитель', health: 15 })).toBe('wounded');
  });

  test('should return "critical" when health < 15', () => {
    expect(getHealthStatus({ name: 'Разведчик', health: 14 })).toBe('critical');
    expect(getHealthStatus({ name: 'Некромант', health: 0 })).toBe('critical');
    expect(getHealthStatus({ name: 'Зомби', health: -10 })).toBe('critical');
  });

  test('should work with non-integer health values', () => {
    expect(getHealthStatus({ health: 50.1 })).toBe('healthy');
    expect(getHealthStatus({ health: 14.9 })).toBe('critical');
  });
});
