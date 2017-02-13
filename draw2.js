const log = console.log;
const readAsync = require("readline-sync");
const Promise = require("bluebird");

function validateInput(m,n){
    if(isNaN(m)){
        throw new Error("m is not number");
    }
    if(isNaN(n)){
        throw new Error("n is not number");
    }
    if(n > Math.ceil(m/2)){
        throw new Error("n should be less than half of m");
    }
    if(m < 1){
        throw new Error("m should greater than zero");
    }
    return [parseInt(m),parseInt(n)];
}

function ask(ques){
    let temp = readAsync.question(ques);
    return temp;
}

function draw2(m,n){
    let endPoint = m - n -1;
    for(let i = 0; i < m; i++){
        let temp = "";
        if(i <= n || i >= endPoint){
            for(let j = 0; j< m;j++){
                temp += "*".concat(" ");
            }
        }else{
            for(let j = 0;j < m;j++){
                if(j <= n || j >= endPoint){
                    temp += "*".concat(" ");
                }else{
                    temp += "  ";
                }
            }
        }
        log(temp);
    }
}

function render(m,n){
    return new Promise((resolve,reject) => {
        // let m = ask("Enter a :");
    // let n = ask("Enter b :");
    [m,n] = validateInput(m,n);
    draw2(m,n);
    resolve([m,n]);
    })
}

exports.validateInput = validateInput;
exports.ask = ask;
exports.draw2 = draw2;
exports.render = render;