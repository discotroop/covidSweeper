3.26.2020: Covid Sweeper

What to do.

1. populate a grid with tiles.
2. populate tiles with covid or no covid.
3. css

tiles:
1. render blank
2. on click reaction
3. needs to know if it has covid or not.


game spec: simple sample: 5 x 5 - 10 covids:
- left click to reveal tile
- right click to flag tile
- numbers need to display based on adjacent tiles. (do this first)
    - logic => 
    if (covid = no) {
        this.checkAdjacentTiles()
    }

    checkAdacentTiles() {
        let adTiles = this.grabAdjacent() // return array
        adTiles.forEach(tile, function() {
            if (tile.covid = true) {
                this.adCount++
            }
        })
    }

    // run all this on initial render / before initial render.