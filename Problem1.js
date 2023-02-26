let n=198;
let arr=[];
while(n!=0){
   let  rem = n % 10;;
  n = Math.floor(n/10);
  arr.push(rem);
}
arr.reverse();
let flag=0;
for(let i=0;i<arr.length;i++ ){
    if(arr[i]>arr[i+1]){
        flag=1;
    }
}
if(flag===0){
    console.log("valid")
}else{
    console.log("not valid");
}
