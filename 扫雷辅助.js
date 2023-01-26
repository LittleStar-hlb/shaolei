class auxiliary {
    //M标记 E未挖出方块 B空
    #board
    #roundBlock
    #originBoard
    #dirX = [-1, -1, -1, 0, 0, 1, 1, 1];
    #dirY = [-1, 0, 1, -1, 1, -1, 0, 1];
    #lClick = 'lClick';
    #rClick = 'rClick';
    #CLICK = function(coor, oper){
        this.array = coor,
        this.operation = oper;
    }
    getBoard(boa){
        this.#originBoard = boa;
        this.#board = boa;
    }

    helper(func){
        let arr = [];
        for(let i = 0;i <board.length;i++){
            for(let j = 0;j < board.length;j++){
                let a = func(i, j);
                for(let k = 0;k < a.length;k++){
                    arr.push(a[k]);
                }
            }
        }
        return arr;
    }
    mineNum_euqal_Block(i, j){
        if(this.#board[i][j] != this.#originBoard[i][j]){
            return [];
        }
        let arr = [];
        for(let ii = 0;ii < 8;ii++){
            let x = this.#dirX[ii] + i;
            let y = this.#dirY[ii] + j;
            if(x >= board[0].length || x < 0 || y < 0 || y >= board.length){
                continue;
            }
            if(board[x][y] == 'E'){
                arr.push(new this.#CLICK([x, y], this.#rClick));
            }
        }
        return arr;
    }
    have_not_mine(i, j){
        if(this.#originBoard[i][j] != 0 && this.#board[i][j] == 0){
            let arr = [];
            for(let ii = 0;ii < 8;ii++){
                let x = this.#dirX[ii] + i;
                let y = this.#dirY[ii] + j;
                if(x >= board[0].length || x < 0 || y < 0 || y >= board.length){
                    continue;
                }
                if(board[x][y] == 'E'){
                    arr.push(new this.#CLICK([x, y], this.#rClick));
                } 
            }
            return arr;
        }else{
            return [];
        }
    }
    one_and_two(i, j){
        if(this.#board[i][j] != '2'){
            return [];
        }
        
    }
}