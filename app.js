// Just copy and paste the below code HAPPY CODING 
function diagonalDifference(arr) {
    // Write your code here
        let principalDiagonal = 0;
let secondaryDiagonal = 0;

for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length; j++){
        //Condition for principalDiagonal
        //The row-column condition is row = column. 
        if(i == j){
            let element = arr[i][j];
            principalDiagonal += element; 
        }
        //Condition for secondaryDiagonal
        //The row-column condition is row = numberOfRows - column - 1
        if((i + j) == (arr.length - 1)){
            let element = arr[i][j];
            secondaryDiagonal += element;
        }
    }
}

console.log("principalDiagonal:" + principalDiagonal);
console.log("secondaryDiagonal:" + secondaryDiagonal);
return Math.abs(principalDiagonal - secondaryDiagonal);
}
