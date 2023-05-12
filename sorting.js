// var nums = [0,15,40,1,31,1,2,13,12];
// //[0,1,1,2,12,13,15,31,40]
// for(var i=0; i<nums.length;){
//     if(nums[i]<nums[i+1])
//    {
//     var points = nums[i];
//     var points1 = nums[i+1];
//     nums[i]= points1;
//     nums[i+1] = points;
//     i--;
//    } else{
//     i++;
//    }
// } 
// console.log(nums);


// var arr = [3,5,14,6,1,4];
 
// for(var i = 0; i<arr.length;){
//     if(arr[i]> arr[i+1]){
//     var points = arr[i];
//     var points1 = arr[i+1];
//     arr[i] = points1
//     arr[i+1] = points
//     i--;
// }else{
//     i++;
// }
// }

// console.log(arr);

// var arr = [5,6,77,2,11,53]
  
//  for(var i=0;i<arr.length;){
//     if(arr[i] >arr[i+1]){
//     var temp = arr[i];
//     var rep = arr [i+1];
//     arr[i+1] = temp;
//     arr[i] =rep;
//     i--;
//     }else{
//         i++
//     }
//  }
//  console.log(arr)



var sr = [2,6,13,1,3];

for(var i = 0; i<sr.length;){
    if(sr[i]>sr[i+1]){
        var tem  = sr[i];
        var tem1 = sr[i+1];

        sr[i+1] = tem;
        sr[i]  =tem1;
        i--;
    }else{
        i++;
    }
    console.log(sr)
}


// step1 -->
// i=0;
// i<5;
