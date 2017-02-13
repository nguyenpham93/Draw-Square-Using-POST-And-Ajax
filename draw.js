const readSync = require("readline-sync");

function ask(ques){
    let temp = readSync.question(ques);
    return temp;
}
exports.ask = ask;

function validateInput(m,n){
    if(isNaN(m)){
        throw new Error("m is not number");
    }
    if(isNaN(n)){
        throw new Error("n is not number");
    }
    if(n >= m){
        throw new Error("n must less than m");
    }
    return [m,n];    
}
exports.validateInput = validateInput;

function drawSquare(m,n){
    // draw outside square  
    let distance = (m - n)/2;
    let insideStart = distance;
    let insideEnd = m - distance - 1;
    let end = m -1;
    for(var i = 0; i < m;i++){
        let temp = "";
        if(i == 0 || i == end){
            for(var j = 0; j < m ; j++){
                temp += "* ";
            }
        }else if (i == insideStart || i == insideEnd){
            for(var j = 0; j < m ; j++){
                if(j == 0 || j == end || (j >= insideStart && j <= insideEnd)){
                    temp += "* ";
                }else{
                    temp += "  ";
                }
            }
        }else{
                if(i < insideStart || i > insideEnd){
                    for(var k = 0;k < m; k++){
                    if(k == 0 || k == end){
                        temp += "* ";
                    }else{  
                        temp += "  ";
                    }
                }
            }
            else{
                for(var k = 0; k < m; k++){
                    if(k == 0 || k == end || k == insideStart || k == insideEnd){
                        temp += "* ";
                    }
                    else{
                        temp += "  ";
                    }
                }
            }
        }
        console.log(temp);
    }
}
exports.drawSquare = drawSquare;
exports.renSquare = () => {
    let m = ask("Enter m : ");
    let n = ask("Enter n : ");
    [m,n] = validateInput(m,n);
    drawSquare(m,n);
}
