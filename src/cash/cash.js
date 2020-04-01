
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
        let total = 0.00;
        let localChange = changeDue;

        while (localChange >= unitValue && unitTotalCash > 0.000 && localChange > 0.00) {
            total += unitValue;
            unitTotalCash -= unitValue;
            localChange -= unitValue;
            localChange = localChange.toFixed(2);
            if (total > 0) {
                total = total.toFixed(2); 
            }
        }
        let result = [unitName, total]
        if (total > 0) {
            return result;
        } else {
            return;
        }
    }
    /// this aint right
    function calculateChangeFromDrawer () {
        let changeFromDrawer = [];
        let localChange = currentChangeDue;
        for (let i=0; i < reversedCID.length; i++) {
            let unitName = reversedCID[i][0];
            let unitTotalCash = reversedCID[i][1];
            let unitValue = reversedCID[i][2];
            let newUnit = adjustDrawer(unitName, unitTotalCash, unitValue, localChange);
            if (newUnit !== undefined) {
                changeFromDrawer.push(newUnit);
            }
        }
        console.log(changeFromDrawer);
        return changeFromDrawer;
    }

    return {
      total: calculateTotalCID(cid),
      changeDue: calculateChangeDue(price, cash).toFixed(2),
      status: currentStatus,
      change: currentChange,
  }
}

export default checkCashRegister;
