let num1 = parseInt(prompt('Enter the first number '))  || 0  ;
let num2 = parseInt(prompt('Enter the second number ')) || 0  ;

if (num1 > num2 ) {
    numb = 'The larger number is '+ num1 ;
    
} else if (num2 > num1) {
    numb = 'The larger number is '+ num2;
    
}

else{
    numb = 'The numbers are equal '; 
}
  
  alert (numb);
