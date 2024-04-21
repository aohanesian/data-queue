class Queue {
    constructor() {
        this.elements = [];
    }

    enqueue(element) {
        element.classList.add('selected');
        element.disabled = 'true';
        this.elements.push(element);
    }

    dequeue() {
        const dequeuedElement = this.elements.shift();
        dequeuedElement.classList.remove('selected');
        return dequeuedElement;
    }


    isEmpty() {
        return this.elements.length === 0;
    }
}

class Stack {
    constructor() {
        this.elements = [];
    }

    push(element) {
        element.classList.add('selected');
        element.disabled = 'true';
        this.elements.push(element);
    }

    pop() {
        const poppedElement = this.elements.pop();
        poppedElement.classList.remove('selected');
        return poppedElement;
    }

    isEmpty() {
        return this.elements.length === 0;
    }
}

const TILES = document.querySelectorAll('.tile');
const TILES_COUNT = TILES.length;
let clickedTiles;

function StackListener(event) {
    if (!event.target.classList.contains('tile') || clickedTiles.elements.includes(event.target) || event.target.disabled === 'true') return;

    clickedTiles.push(event.target);

    if (clickedTiles.elements.length >= TILES_COUNT) {
        const interval = setInterval(() => {
            const tile = clickedTiles.pop();
            if (clickedTiles.isEmpty()) {
                clearInterval(interval);
                TILES.forEach(tile => tile.disabled = 'false');
            };
        }, 330);
    };
};

function QueueListener(event) {
    if (!event.target.classList.contains('tile') || clickedTiles.elements.includes(event.target) || event.target.disabled === 'true') return;

    clickedTiles.enqueue(event.target);

    if (clickedTiles.elements.length >= TILES_COUNT) {
        const interval = setInterval(() => {
            const tile = clickedTiles.dequeue();
            if (clickedTiles.isEmpty()) {
                clearInterval(interval);
                TILES.forEach(tile => tile.disabled = 'false');
            };
        }, 330);
    };
};

function handleStackClick() {
    clickedTiles = new Stack();
    document.addEventListener('click', StackListener);
}

function handleQueueClick() {
    clickedTiles = new Queue();
    document.addEventListener('click', QueueListener);
}


function initialize() {
    document.getElementById('stackButton').addEventListener('click', handleStackClick);
    document.getElementById('queueButton').addEventListener('click', handleQueueClick);

    function gridAlert() {
        alert('Choose type of data structure');
    }

    const buttons = document.querySelectorAll('#stackButton, #queueButton');
    const grid = document.querySelector('.grid');
    grid.addEventListener('click', gridAlert)

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            grid.style.cursor = 'auto';
            grid.removeEventListener('click', gridAlert);
            buttons.forEach(btn => btn.disabled = 'true');
        });
    });
};

initialize();



