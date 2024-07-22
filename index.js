// Function to get a matrix from the user
function getMatrix(rows, cols) { 
let matrix = [];
for (let i = 0; i < rows; i++) { 
matrix[i] = []; 
for (let j = 0; j < cols; j++) { 
         matrix[i][j] = parseFloat(prompt(`Enter entry for matrix at row ${i + 1}, column ${j + 1}`));  
    }}
 return(matrix);
}

// FUNCTION FOR MULTIPLYING MATRICES
function multiplyMatrices(matrix1, matrix2) {
let result = [];
let rows1 = matrix1.length;   
let cols1 = matrix1[0].length; 
let cols2 = matrix2[0].length;  
for (let i = 0; i < rows1; i++) {  
    result[i] = [];   
    for (let j = 0; j < cols2; j++) { 
    result[i][j] = 0;   
    for (let k = 0; k < cols1; k++) {
    result[i][j] += matrix1[i][k] * matrix2[k][j];  
            }}}
    return(result);
}

// Result
let nor = parseInt(prompt("Enter number of rows for the first matrix"));
let noc = parseInt(prompt("Enter number of columns for the first matrix"));
let matrix1 = getMatrix(nor, noc);
console.log("Matrix1:", matrix1);
let nor2 = parseInt(prompt("Enter number of rows for the second matrix"));
let noc2 = parseInt(prompt("Enter number of columns for the second matrix"));
let matrix2 = getMatrix(nor2, noc2);
console.log("Matrix2:", matrix2);
if (noc === nor2) {
let matrixResult = multiplyMatrices(matrix1, matrix2);
    console.log("Resulting Matrix:", matrixResult);
} else {
console.log("Multiplication not possible");
}
