
var myArry = [51,500,46,0o1,32,15,54,6,9,8,7,65,32,69,78,58];

// sob theke boro sonkkha ta dekhate hobe =========================> 

var max = -99;
for(let i = 0; i < myArry.length; i++){
    if(max < myArry[i]){
        max = myArry[i]
        // console.log(max);
    }
}