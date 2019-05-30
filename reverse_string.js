//for loop, no built-in
function reverseString(stringNormal){
    var stringNormal = "hello world";
    var stringReversed = '';
    for (var i = stringNormal.length -1; i >= 0; i--)
        stringReversed += stringNormal[i];
        console.log(stringReversed); //print the result
        return stringReversed;
}

reverseString(); //calls the function

//built-in solution
