"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateHealth = calculateHealth;
function calculateHealth(health) {
  if (health > 50) {
    return 'healthy';
  } else if (health >= 15) {
    return 'wounded';
  } else {
    return 'critical';
  }
}