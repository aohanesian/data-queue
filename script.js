const TILES = document.querySelectorAll('.tile');
const TILES_COUNT = TILES.length;


const clickedTiles = [];

document.addEventListener('click', function (event) {
    if (!event.target.classList.contains('tile') || clickedTiles.includes(event.target) || event.target.disabled === 'true') return;
    
    const currTile = event.target
    clickedTiles.push(currTile);
    currTile.classList.add('selected');
    currTile.disabled = 'true';

    if (clickedTiles.length >= TILES_COUNT) {
        const interval = setInterval(() => {
            const tile = clickedTiles.shift();
            tile.classList.remove('selected');
            if (clickedTiles.length === 0) {
                clearInterval(interval);
                TILES.forEach(tile => tile.disabled = 'false');
            };
        }, 330);
    };
});