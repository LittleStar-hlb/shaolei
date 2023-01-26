class Game {
    //M雷 X惊雷 B白块 E没挖出方块 F旗帜
    #visibleCells;
    #cells;
    #len;
    #wid;
    #mineNum;

    constructor(mineNum, len, width) {
        this.#wid = width;
        this.#len = len;
        this.#mineNum = mineNum;
    }

    init() {
        if (this.#wid == undefined) {
            this.setWid(this.#len);
        }

        this.#cells = [];
        this.#visibleCells = [];
        for (let i = 0; i < this.#wid; i++) {
            this.#cells[i] = new Array(this.#len).fill('E');
            this.#visibleCells[i] = new Array(this.#len).fill(false);
        }
        this.#createMineCells();
    }

    setLen(n) {
        this.#len = n;
    }

    setWid(n) {
        this.#wid = n;
    }

    setMineNum(n) {
        this.#mineNum = n;
    }

    clickCoor(click) {
        let i = click[0];
        let j = click[1];
        let arr = [];
        if (this.#cells[i][j] == 'M') {
            this.#visibleCells[i][j] = true;
            this.#cells[i][j] = 'X';
            arr.push([i, j]);
        } else if (this.#cells[i][j] == 'E') {
            arr = this.#BFS(click);
        }

        return this.#transform(arr);
    }

    #transform(array) {
        let newArray = []
        function mineJSON(a, state) {
            this.arr = a,
                this.state = state;
        }
        while (array.length != 0) {
            let a = array.pop();
            let obj = new mineJSON(a, this.#cells[a[0]][a[1]]);
            newArray.push(obj);
        }
        return newArray;
    }

    #dirX = [-1, -1, -1, 0, 0, 1, 1, 1];
    #dirY = [-1, 0, 1, -1, 1, -1, 0, 1];

    #BFS(click) {
        let queue = [];
        queue.push(click);
        this.#visibleCells[click[0]][click[1]] = true;

        let k = 0;
        while (k < queue.length) {
            let arr = queue[k++];
            let num = this.#adjion(arr);
            if (parseInt(num) > 0) {
                this.#cells[arr[0]][arr[1]] = num;
                continue;
            }

            this.#cells[arr[0]][arr[1]] = 'B';
            for (let i = 0; i < 8; i++) {
                let ii = this.#dirX[i] + arr[0];
                let jj = this.#dirY[i] + arr[1];
                if (ii < 0 || ii >= this.#cells.length || jj < 0 || jj >= this.#cells[0].length || this.#visibleCells[ii][jj]) {
                    continue;
                }
                this.#visibleCells[ii][jj] = true;
                queue.push([ii, jj]);
            }
        }
        return queue;
    }

    #adjion(click) {
        let sum = 0;
        for (let i = 0; i < 8; i++) {
            let ii = this.#dirX[i] + click[0];
            let jj = this.#dirY[i] + click[1];
            if (ii < 0 || ii >= this.#cells.length || jj < 0 || jj >= this.#cells[0].length) {
                continue;
            }
            if (this.#cells[ii][jj] == 'M') {
                sum++;
            }
        }
        return String(sum);
    }

    #createMineCells() {
        for (let k = 1; k <= this.#mineNum; k++) {
            let i = Math.floor(Math.random() * this.#wid);
            let j = Math.floor(Math.random() * this.#len);
            if (this.#cells[i][j] == 'M') {
                helper(this.#cells, i, j)
            } else {
                this.#cells[i][j] = 'M';
            }
        }

        function helper(cells, i, j) {
            while (true) {
                j++;
                i = (i + Math.ceil(j / cells[0].length)) % cells.length;
                j = j % cells[0].length;
                if (cells[i][j] != 'M') {
                    cells[i][j] == 'M';
                    break;
                }
            }
        }
    }
}