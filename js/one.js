let mine = './images/雷.gif';
let xMine = './images/惊雷.gif';
let flag = './images/标志.gif';
let blo = './images/方块.gif';
let oneMine = 'images/1雷.gif';
let twoMine = 'images/2雷.gif';
let threeMine = 'images/3雷.gif';
let fourMine = 'images/4雷.gif';
let fiveMine = 'images/5雷.gif';
let sixMine = 'images/6雷.gif';
let sevenMine = 'images/7雷.gif';
let eightMine = 'images/8雷.gif';
let notHave = './images/空.gif'
let trans = new Map();
trans.set('1', oneMine);
trans.set('2', twoMine);
trans.set('3', threeMine);
trans.set('4', fourMine);
trans.set('5', fiveMine);
trans.set('6', sixMine);
trans.set('7', sevenMine);
trans.set('8', eightMine);
trans.set('X', xMine);
trans.set('B', notHave);
trans.set('F', flag);
trans.set('E', blo);












let temp = document.querySelector('.one');
let len = temp.querySelector('input');

temp = document.querySelector('.two');
let mineNum = temp.querySelector('input');

let reStart = document.querySelector('.three');

//限制数值为10到50
len.addEventListener('blur', function () {

})

reStart.addEventListener('click', function () {
    init();
})

init();












function init() {
    let game = new Game(parseInt(mineNum.value), parseInt(len.value), parseInt(len.value));
    game.init();

    let mineBoard = new MineBoard(len.value);
    mineBoard.Init();

    let cells = [];
    for (let i = 0; i < len.value; i++) {
        cells[i] = new Array(parseInt(len.value)).fill('E');
    }
    console.log(cells);

    let table = mineBoard.getTable();
    table.addEventListener('click', function (e) {
        console.log(3);
        clickEvent(e)
    });
    table.addEventListener('contextmenu', function (e) {
        clickEvent(e);
    })


    function clickEvent(e) {
        console.log(cells);
        let target = e.target;
        if (target.nodeName != "IMG") {
            return;
        }
        target = target.parentNode;
        let coor = mineBoard.searchNode(target);

        if (e.type == 'contextmenu') {
            if (cells[coor[0]][coor[1]] == 'E') {
                cells[coor[0]][coor[1]] = 'F';
                mineBoard.chrangePointUseCoor(coor, trans.get('F'));
                console.log(1);
                return;
            } else if (cells[coor[0]][coor[1]] == 'F') {
                cells[coor[0]][coor[1]] = 'E';
                mineBoard.chrangePointUseCoor(coor, trans.get('E'));
                console.log(2);
                return;
            }
        } else {
            if(cells[coor[0]][coor[1]] == 'F'){
                return;
            }

            let arr = game.clickCoor(coor);
            for (let i = 0; i < arr.length; i++) {
                let obj = arr[i];
                cells[obj['arr'][0]][obj['arr'][1]] = obj['state'];
                mineBoard.chrangePointUseCoor(obj['arr'], trans.get(obj['state']));
            }
        }
    }
}