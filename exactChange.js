/**
 * 
 * Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
 * cid is a 2D array listing available currency.
 * Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.
 * Otherwise, return change in coin and bills, sorted in highest to lowest order.
 * 
 * @param {number} price 
 * @param {number} cash 
 * @param {Array} cid 
 * @returns 
 */
const checkCashRegister = (price, cash, cid) => {
  const values = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
  let change = cash * 100 - price * 100;
  let allCash = true;

  let moneyback = cid.reduceRight((p, c, i) => {
    let out = Math.min(change - change % values[i], c[1] * 100);
    change -= out;
    if (out !== c[1] * 100) {
      allCash = false;
    }
    return out ? p.concat([[c[0], out / 100]]) : p;
  }, []);

  return change > 0 ? 'Insufficient Funds' : allCash ? 'Closed' : moneyback;
};

checkCashRegister(19.50, 20.00, [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.10],
  ['QUARTER', 4.25],
  ['ONE', 90.00],
  ['FIVE', 55.00],
  ['TEN', 20.00],
  ['TWENTY', 60.00],
  ['ONE HUNDRED', 100.00]
]);
