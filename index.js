
// Question ONE pNath
// pNath
function convertFahrToCelsius(fahr){
    var celsius;
    var fahr;
    if (isNaN(fahr)){
        if(Array.isArray(fahr)){
            console.log(JSON.stringify(fahr)+ " is not a valid number but a/an array");
        } else if(typeof(fahr)=='object'){
            console.log(JSON.stringify(fahr)+ " is not a valid number but a/an object");
        }else {
            console.log(fahr + " is not a valid number but a/an " + typeof(fahr));
        }
      return fahr;
    }// pNath
     else {
        celsius=((fahr-32)*5/9);
        console.log(celsius.toFixed(4));
        return celsius;
    }
}// pNath
convertFahrToCelsius(0);
convertFahrToCelsius("0");
convertFahrToCelsius([1,2,3]);
convertFahrToCelsius({temp: 0});



// Question Two

// checkYuGiOh function that retuns a value pNath

function checkYuGiOh(val){
    var val;// pNath
     if (isNaN(val)==true){
        if (Array.isArray(val)==true){
            console.log("invalid parameter: " + JSON.stringify(val));
            return val; // pNath
         } else if (typeof(val)=="object"){
            console.log("invalid paramter: " + JSON.stringify(val));
            return val;
         } else {
            console.log("invalid paramter: " + JSON.stringify(val));
            return val;
         } 
         // pNath
     }
     else {
         var result;

         //Assigning the check function to a variable and passing the parameter in the checkYuGiOh function to it
         result = create(val);

         //A nested function that creates an array of numbers from 1 to n and replaces multiples of 2, 3, and 5 with "yu", "gi" and "oh"
         function create(n){
            var n;
            var arr = [ ];
            for (i=1; i<=n; i++){
                if (i%2==0 && i%3==0 && i%5==0){
                   arr.push('yu-gi-oh');
                }else  if (i%2==0 && i%3==0){
                   arr.push("yu-gi");
                }else  if (i%2==0 && i%5==0){
                   arr.push("yu-oh");
                } else  if (i%3==0 && i%5==0){
                   arr.push("gi-oh");
                } else  if (i%5==0){
                   arr.push("oh");
                } else  if (i%3==0){
                   arr.push("gi");
                } else  if (i%2==0){
                   arr.push("yu");
                } // pNath
                else{
                   arr.push(i);
                }
              console.log(arr);
            }
            return arr;
           }
           return result;
     }}
// pNath
checkYuGiOh(10);
checkYuGiOh("5"); // pNath
checkYuGiOh("fizzbuzz is meh");

