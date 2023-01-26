

class MineBoard {
    #board;
    #len;
    #table;

    constructor(len){
        this.#len = len;
        this.#table = this.Init();
        this.#board = this.#getNodes();
    }
    
    #chrangePoint(node, url) {
        node.innerHTML = '<img src=' + url + '>';
    }

    chrangePointUseCoor(coor, url){
        this.#chrangePoint(this.#board[coor[0]][coor[1]], url);
    }
    
    Init() {
        let table = document.querySelector('table');
        table.innerHTML = '';
        for (let i = 0; i < this.#len; i++) {
            let tr = document.createElement('tr');
            for (let j = 0; j < this.#len; j++) {
                let td = document.createElement('td');
                this.#chrangePoint(td, blo);
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        this.#table = table;
        this.#board = this.#getNodes();
        return table;
    }

    getTable(){
        return this.#table;
    }

    #getNodes() {
        let board = [];
        let tr = document.getElementsByTagName('tr');
        for (let i = 0; i < tr.length; i++) {
            board[i] = []
            let td = tr[i].getElementsByTagName('td');
            for (let j = 0; j < td.length; j++) {
                board[i].push(td[j]);
            }
        }
        return board;
    }

    searchNode(node) {
        for (let i = 0; i < this.#board.length; i++) {
            for (let j = 0; j < this.#board[i].length; j++) {
                if (this.#board[i][j] == node) {
                    return [i, j];
                }
            }
        }
        return [];
    }
}