const sudoku = [
    [1,5,4,8,7,3,2,9,6],
    [3,8,6,5,9,2,7,1,4],
    [7,2,9,6,4,1,8,3,5],
    [8,6,3,7,2,5,1,4,9],
    [9,7,5,3,1,4,6,2,8],
    [4,1,2,9,6,8,3,5,7],
    [6,3,1,4,5,7,9,8,2],
    [5,9,8,2,3,6,4,7,1],
    [2,4,7,1,8,9,5,6,3]
];

let flag= 0, t=1;
while(t){
    // row check
    sudoku.forEach(line => {
        let row = [...line];
        row.sort();
        for(let i=0; i<9 ;i++){
            if(i+1 !== row[i])
                flag = 1;
        }
    })
    if(flag === 1)
        break;
    // column check
    for(i=0;i<9;i++){
        let col = [];
        for(j=0;j<9;j++){
            col.push(sudoku[j][i])
        }
        col.sort();
        for(let k=0; k<9 ;k++){
            if(k+1 !== col[k])
                flag = 1;
        }
    }
    // 3 * 3 grid check
    for(let k=0;k<3;k++){
        for(let l=0;l<3;l++){
            let grid = [];
            for(let i=0;i<3;i++){
                for(let j=0;j<3;j++){
                    grid.push(sudoku[3*k+i][3*l+j])
                }
            }
            grid.sort();
            for(let i=0; i<9 ;i++){
                if(i+1 !== grid[i])
                flag = 1;
            }
        }
    }   
    t--;
}

if(flag === 0)
    console.log("The given sudoku is balanced.");
else
    console.log("The given sudoku is NOT balanced.");
