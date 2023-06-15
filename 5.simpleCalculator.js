
/* This is the same calculation done with tertiary operators
function calculation(num1, num2, operator){
let result = 0;

    switch(operator){
        case "add": result = num1 + num2; break;
        case "subtract": result = num1 - num2; break;
        case "multiply": result = num1 * num2; break;
        case "divide": result = num1 / num2; break;
    }
    console.log(result)

}
calculation(5, 5, 'multiply')
*/

function simpleCalc(num1, num2, operator){

    let obj = {
        "multiply": (a,b) => a*b,
        "divide": (a,b) => a/b,
        "add": (a,b) => a + b,
        "subtract": (a,b) => a - b,
    }
    return obj[operator](num1,num2)
}
console.log(simpleCalc(40,8,'add'))
