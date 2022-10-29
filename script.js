function calcNumbers(result) {
    calc.result.value = calc.result.value + result;
}
function displayColor() {
    document.getElementById("dis").style.backgroundColor = "blue";
    document.getElementById("eqbtn").style.backgroundColor = "blue";
    // document.querySelectorAll("#dis,#eqbtn").style.backgroundColor = "blue";
}
function addOp(){
    alert("Addition operation!");
}
function subOp(){
    alert("Subtraction operation!");
}
function mulOp(){
    alert("Multiplication operation!");
}
function divOp(){
    alert("Division operation!");
}
function decimalOp(){
    alert("Decimal input given!");
}
function evalResult(){
    var x = eval(calc.result.value);
    calc.result.value= x ;
    if(x%1 != 0){
        alert("Decimal output!");
    }
}
// function resetDisplay(){
//     calc.result.value=0;
// }