/*-------------------------------------------------------------------------------------------------------*/
console.log('x>',x)
var x = 5;

console.log('y>',y)
let y = 10;



/*-------------------------------------------------------------------------------------------------------*/
var a = 5;
console.log('a begin >',a)

function aaa(){

    if(a){
        console.log('a>',a)
        var a = 10;
    }
    console.log('a function>',a)
}
aaa()
console.log('a end>',a)

/*-------------------------------------------------------------------------------------------------------*/

function areaNum(price){
    let priceArrRevrs =makeNumArr(price);
    let preResult = pipeArray(priceArrRevrs);
    console.log('number>',preResult)  
}

function makeNumArr(number){
    let numStr;
    if(typeof(number) !== "string"){
        numStr = String(number);
    }
    let numReverse=[];
    for(let j=0;j<numStr.length;j++){
        numReverse.push(numStr[j]);
    }
    return numReverse.reverse();
}

function pipeArray(priceArrRevrs){
    let list=[];
    let ignorNum = 3
    for(let i=0;i<priceArrRevrs.length;i++){
        if( i!==ignorNum){
            list.push(priceArrRevrs[i]) 
        }else{
            ignorNum +=3; 
            list.push(priceArrRevrs[i])
        }
    }
    return list;
}

areaNum(1234567891234);