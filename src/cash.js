
function checkCashRegister(price, cash, cid) {
    function calculateTotalCID(CID) {
        let totalCID = 0.00000000;
        console.log(CID)
        CID.forEach(function(unit) {
            totalCID += unit[1]
        })
        totalCID = Math.round(totalCID * 100 + Number.EPSILON) / 100
        return totalCID;
    }

// returns object
// with status and change keys
    return {
      total: calculateTotalCID(cid),
  }
}

export default checkCashRegister;
