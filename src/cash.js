
function checkCashRegister(price, cash, cid) {
    let currentStatus = "OPEN";
    let currentChange = [];
    let reversedCID = cid.reverse();

    // reversed and added unit value for easier calculation later
    reversedCID.forEach(function(unit) {
        switch(unit[0]) {
            case "PENNY":
                unit[2] = 0.01;
                break;
            case "NICKEL":
                unit[2] = 0.05;
                break;
            case "DIME": 
                unit[2] = 0.10;
                break;
            case "QUARTER":
                unit[2] = 0.25;
                break;
            case "ONE":
                unit[2] = 1;
                break;
            case "FIVE":
                unit[2] = 5;
                break;
            case "TEN":
                unit[2] = 10;
                break;
            case "TWENTY":
                unit[2] = 20;
                break;
            case "ONE HUNDRED":
                unit[2] = 100;
                break;
            default:
                console.log("wh0ops")
        }
    });

    function calculateTotalCID(CID) {
        let totalCID = 0.00000000;
        CID.forEach(function(unit) {
            totalCID += unit[1]
        })
        totalCID = Math.round(totalCID * 100 + Number.EPSILON) / 100
        return totalCID;
    }
    function calculateChangeDue(price, cash) {
        return cash - price;
    }

    let currentChangeDue = calculateChangeDue(price, cash)
    let currentCID = calculateTotalCID(cid);

    if (currentChangeDue > currentCID) {
        currentStatus = "INSUFFICIENT_FUNDS"
    } else if (currentChangeDue === currentCID) {
        currentStatus = "CLOSED";
        currentChange = cid;
    } else {
        calculateChangeFromDrawer();
    }
    function adjustDrawer(unitName, unitTotalCash, unitValue, changeDue) {
        let total = 0;
        while (changeDue > unitTotalCash && unitTotalCash > 0)
            total += unitValue;
            unitTotalCash -= unitValue;
            changeDue -= unitValue;
        let result = [unitName, total]
        return result
    }

    function calculateChangeFromDrawer () {
        let changeFromDrawer = [];
        for (let i=0; i < reversedCID.length; i++) {
            let unit = reversedCID[i];
            let unitName = reversedCID[i][0];
            let unitTotalCash = reversedCID[i][1];
            let unitValue = reversedCID[i][2];
            if (currentChangeDue > unitValue && unitTotalCash > 0) {
                changeFromDrawer.push(adjustDrawer(unitName, unitTotalCash, unitValue, currentChangeDue))
            }
        }
        console.log(changeFromDrawer);
    }

    return {
      total: calculateTotalCID(cid),
      changeDue: calculateChangeDue(price, cash),
      status: currentStatus,
      change: currentChange,
  }
}

export default checkCashRegister;
