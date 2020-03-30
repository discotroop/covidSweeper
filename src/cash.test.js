import checkCashRegister from './cash.js'

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


// purchase price => price
// payment => cash
// cid => 2d array of available currency.

// return {status: "INSUFFICIENT_FUNDS", change: []}
// if cash-in-drawer is less than change due | cannot return exact change.

// return {status: "CLOSED, change: [...]"}
// with cash-in-drawer as the value for the key change it it is
// equal to change due. 

// otherwise return {status: "OPEN", change: [...]}
// with the change due in coins and bills, sorted
// highest to lower order as value of change key.

// SAMPLE cid array 
  

test('it returns insufficent funds response if cid is less than change due.', ()=> {
   let sample = checkCashRegister(20, 20, sampleCID)
    console.log(sample.total)
})