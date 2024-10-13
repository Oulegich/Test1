import { calculateHealth } from '../health';

test('health color', () => {
  const about = 
  [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ]
  about.sort((a, b) => b.health - a.health);
  const received = about.map(character => calculateHealth(character.health));
  expect(received).toEqual(['healthy', 'healthy', 'critical']);
})

describe('healthCalculate', () => {
  it('>50', () => {
    expect(calculateHealth(70)).toBe('healthy');
    expect(calculateHealth(100)).toBe('healthy');
  });

  it('15-50', () => {
    expect(calculateHealth(30)).toBe('wounded');
    expect(calculateHealth(50)).toBe('wounded');
  });

  it('<15', () => {
    expect(calculateHealth(10)).toBe('critical');
    expect(calculateHealth(0)).toBe('critical');
  });
});