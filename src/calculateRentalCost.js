/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  if (typeof days !== 'number' || days <= 0) {
    return 0;
  }

  const COST_PER_DAY = 40;
  const DISCOUNT_LONG = 50;
  const DISCOUNT_MEDIUM = 20;

  let result = days * COST_PER_DAY;

  if (days >= 7) {
    result -= DISCOUNT_LONG;
  } else if (days >= 3) {
    result -= DISCOUNT_MEDIUM;
  }

  return result;
}

module.exports = calculateRentalCost;
