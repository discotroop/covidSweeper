// Create an array of objects which hold the currentValueencyValueinations and their values
let currencyValue = [
    { name: "ONE HUNDRED", val: 100.0 },
    { name: "TWENTY", val: 20.0 },
    { name: "TEN", val: 10.0 },
    { name: "FIVE", val: 5.0 },
    { name: "ONE", val: 1.0 },
    { name: "QUARTER", val: 0.25 },
    { name: "DIME", val: 0.1 },
    { name: "NICKEL", val: 0.05 },
    { name: "PENNY", val: 0.01 }
  ];
  
  function checkCashRegister(price, cash, cid) {
    let output = { status: null, change: [] };
    let change = cash - price;
  
    let register = cid.reduce(
      function(accumulator, currentValue) {
        accumulator.total += currentValue[1];
        accumulator[currentValue[0]] = currentValue[1];
        return accumulator;
        console.log("accumulator", accumulator)
      },
      { total: 0 }
    );
      if (register.total === change) {
      output.status = "CLOSED";
      output.change = cid;
      return output;
    }
      if (register.total < change) {
      output.status = "INSUFFICIENT_FUNDS";
      return output;
    }
  
    let changeArray = currencyValue.reduce(function(accumulator, currentValue) {
      let value = 0;
      while (register[currentValue.name] > 0 && change >= currentValue.val) {
        change -= currentValue.val;
        register[currentValue.name] -= currentValue.val;
        value += currentValue.val;
        // deal with floating point errors
        change = Math.round(change * 100) / 100;
      }
      if (value > 0) {
        accumulator.push([currentValue.name, value]);
      }
      return accumulator; 
    }, []);

    if (changeArray.length < 1 || change > 0) {
      output.status = "INSUFFICIENT_FUNDS";
      return output;
    }
    output.status = "OPEN";
    output.change = changeArray;
    return output;
  }
  
  // test here
  checkCashRegister(19.5, 20.0, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90.0],
    ["FIVE", 55.0],
    ["TEN", 20.0],
    ["TWENTY", 60.0],
    ["ONE HUNDRED", 100.0]
  ]);




// function checkCashRegister(price, cash, cid) {
//     let currentValueentStatus = "OPEN";
//     let currentValueentChange = [];
//     let reversedCID = cid.reverse();

//     // reversed and added unit value for easier calculation later
//     reversedCID.forEach(function(unit) {
//         switch(unit[0]) {
//             case "PENNY":
//                 unit[2] = 0.01;
//                 break;
//             case "NICKEL":
//                 unit[2] = 0.05;
//                 break;
//             case "DIME": 
//                 unit[2] = 0.10;
//                 break;
//             case "QUARTER":
//                 unit[2] = 0.25;
//                 break;
//             case "ONE":
//                 unit[2] = 1;
//                 break;
//             case "FIVE":
//                 unit[2] = 5;
//                 break;
//             case "TEN":
//                 unit[2] = 10;
//                 break;
//             case "TWENTY":
//                 unit[2] = 20;
//                 break;
//             case "ONE HUNDRED":
//                 unit[2] = 100;
//                 break;
//             default:
//                 console.log("wh0ops")
//         }
//     });

//     function calculateTotalCID(CID) {
//         let totalCID = 0.00000000;
//         CID.forEach(function(unit) {
//             totalCID += unit[1]
//         })
//         totalCID = Math.round(totalCID * 100 + Number.EPSILON) / 100
//         return totalCID;
//     }
//     function calculateChangeDue(price, cash) {
//         return cash - price;
//     }

//     let currentValueentChangeDue = calculateChangeDue(price, cash)
//     let currentValueentCID = calculateTotalCID(cid);

//     if (currentValueentChangeDue > currentValueentCID) {
//         currentValueentStatus = "INSUFFICIENT_FUNDS"
//     } else if (currentValueentChangeDue === currentValueentCID) {
//         currentValueentStatus = "CLOSED";
//         currentValueentChange = cid;
//     } else {
//         calculateChangeFromDrawer();
//     }
//     function adjustDrawer(unitName, unitTotalCash, unitValue, changeDue) {
//         let total = 0.00;
//         let localChange = changeDue;

//         while (localChange >= unitValue && unitTotalCash > 0.000 && localChange > 0.00) {
//             total += unitValue;
//             unitTotalCash -= unitValue;
//             localChange -= unitValue;
//             localChange = localChange.toFixed(2);
//             if (total > 0) {
//                 total = total.toFixed(2); 
//             }
//         }
//         let result = [unitName, total]
//         if (total > 0) {
//             return result;
//         } else {
//             return;
//         }
//     }
//     /// this aint right

//     // sample
//     // 1 penny, 1 quarter, 1 dollar => 126
//     // maybe say 100 > 27 - 100
//     // 25 < 27 => keep it
//     // 1 < 27 => keep it 
//     // 26 < 27 => insufficient funds
//     // 126 - 27 => 99
//     function calculateChangeFromDrawer () {
//         let changeFromDrawer = [];
//         let localChange = currentValueentChangeDue;
//         for (let i=0; i < reversedCID.length; i++) {
//             let unitName = reversedCID[i][0];
//             let unitTotalCash = reversedCID[i][1];
//             let unitValue = reversedCID[i][2];
//             let newUnit = adjustDrawer(unitName, unitTotalCash, unitValue, localChange);
//             if (newUnit !== undefined) {
//                 changeFromDrawer.push(newUnit);
//             }
//         }
//         console.log(changeFromDrawer);
//         return changeFromDrawer;
//     }

//     return {
//       total: calculateTotalCID(cid),
//       changeDue: calculateChangeDue(price, cash).toFixed(2),
//       status: currentValueentStatus,
//       change: currentValueentChange,
//   }
// }

// export default checkCashRegister;
