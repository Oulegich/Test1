"use strict";

var _health = require("../health");
test('health color', () => {
  const about = [{
    name: 'мечник',
    health: 10
  }, {
    name: 'маг',
    health: 100
  }, {
    name: 'лучник',
    health: 80
  }];
  about.sort((a, b) => b.health - a.health);
  const received = about.map(character => (0, _health.calculateHealth)(character.health));
  expect(received).toEqual(['healthy', 'healthy', 'critical']);
});
describe('healthCalculate', () => {
  it('>50', () => {
    expect((0, _health.calculateHealth)(70)).toBe('healthy');
    expect((0, _health.calculateHealth)(100)).toBe('healthy');
  });
  it('15-50', () => {
    expect((0, _health.calculateHealth)(30)).toBe('wounded');
    expect((0, _health.calculateHealth)(50)).toBe('wounded');
  });
  it('<15', () => {
    expect((0, _health.calculateHealth)(10)).toBe('critical');
    expect((0, _health.calculateHealth)(0)).toBe('critical');
  });
});