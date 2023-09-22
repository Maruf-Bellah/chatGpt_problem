// if and els er chek kora dekhaw ====================================


// var a = 5;
// var b = 3;
// var c = 1;

// if(a > b && a > c){
//     console.log("A is greter then All = " + a);
// }else if(b > a && b > c){
//     console.log('B is greter then All = ' + b);
// }else if(c > b && c > a){
//     console.log('C is greter then All = ' + c);
// }


// if(a < b && a < c){
//     console.log("A is less then All = " + a);
// }else if(b < a && b < c){
//     console.log('B is less then All = ' + b);
// }else if(c < b && c < a){
//     console.log('C is less then All = ' + c);
// }


var myArry = [51,500,46,0o1,32,15,54,6,9,8,7,65,32,69,78,58];

// sob theke boro sonkkha ta dekhate hobe =========================> 

var max = -99;
for(let i = 0; i < myArry.length; i++){
    if(max < myArry[i]){
        max = myArry[i]
        // console.log(max);
    }
}

// console.log(max);


// sob theke choto number ta dekhate hobe =====================


var min = 504;

for(let i = 0; i < myArry.length; i++){
    if(min > myArry[i]){
        min = myArry[i]
        // console.log(min);
    }
}

// console.log(min);



// ekta arry er moddhe value ta ace kina and koto number index e ace dekhaw ==========


var tergetValue = 6;
var value = myArry.includes(tergetValue);
if(value){
    console.log(`value ace and index number = ${myArry.indexOf(tergetValue)}`)
}else{
    console.log('value nai');
}


// eta row javascript diye kora hoyese 

var all = 6;

for(let i = 0; i < myArry.length; i++){
    if(all=== myArry[i]){
        all = myArry[i]
        console.log(`value ace and index value = ${i}`);
        break
    }else{
        console.log('vai value nai');
    }
}






