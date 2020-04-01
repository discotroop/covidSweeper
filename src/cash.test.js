import checkCashRegister from './cash.js'
import { exportAllDeclaration } from '@babel/types';

const sampleCID = [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ]

  const simplerCID = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.10],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ]

//
// purchase price => price
// payment => cash
// cid => 2d array of available currency.

// return {status: "INSUFFICIENT_FUNDS", change: []}
// if cash-in-drawer is less than change due | cannot return exact change.

// otherwise return {status: "OPEN", change: [...]}
// with the change due in coins and bills, sorted
// highest to lower order as value of change key.
  

test('total calculates total cid.', ()=> {
   let sample = checkCashRegister(20, 20, sampleCID)
    expect(sample.total).toBe(335.41)
})
test('calculateChangeDue calculates change due.', ()=> {
    let sample = checkCashRegister(10, 20, sampleCID)
     expect(sample.changeDue).toBe(10);
})

// change due > cid
test('returns status: "INSUFFICIENT_FUNDS" if change due > cid.', ()=> {
    let sample = checkCashRegister(10, 500, sampleCID)
     expect(sample.status).toBe("INSUFFICIENT_FUNDS");
})
test('returns change: [] if change due > cid.', ()=> {
    let sample = checkCashRegister(10, 500, sampleCID)
     expect(sample.change).toStrictEqual([]);
})

// exact change cannot be provided
test.only('returns status: "INSUFFICIENT_FUNDS" if exact change cannot be provided.', ()=> {
    console.log("wee")
})
test('returns change: [] if exact change cannot be provided.', ()=> {
    let sample = checkCashRegister(0.56, 1, sampleCID)
     expect(sample.change).toStrictEqual([]);
})


test('returns status: "CLOSED if change due === cid.', ()=> {
    let sample = checkCashRegister(5, 10, sampleCID)
     expect(sample.status).toBe("CLOSED");
})
test('returns change: cid if change due === cid.', ()=> {
    let sample = checkCashRegister(0, 335.41, sampleCID)
     expect(sample.change).toBe(sampleCID);
})