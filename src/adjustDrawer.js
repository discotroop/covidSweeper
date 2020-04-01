    function adjustDrawer(unitName, unitTotalCash, unitValue, changeDue) {
        let total = 0.00;
        do {
            total += unitValue;
            unitTotalCash -= unitValue;
            changeDue -= unitValue;
            changeDue = changeDue.toFixed(2);
            console.log(changeDue)

        }
        while (changeDue >= unitValue && unitTotalCash > 0.000 && changeDue > 0.00)
        let result = [unitName, total]
        return result
    }

    // function calculateChangeFromDrawer () {
    //     let changeFromDrawer = [];
    //     for (let i=0; i < reversedCID.length; i++) {
    //         let unit = reversedCID[i];
    //         let unitName = reversedCID[i][0];
    //         let unitTotalCash = reversedCID[i][1];
    //         let unitValue = reversedCID[i][2];
    //         if (currentChangeDue > unitValue && unitTotalCash > 0) {
    //             changeFromDrawer.push(adjustDrawer(unitName, unitTotalCash, unitValue, currentChangeDue))
    //         }
    //     }
    //     console.log(changeFromDrawer);
    // }

export default adjustDrawer;
