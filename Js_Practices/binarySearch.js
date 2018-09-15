/* Binary search is an algorithm used to find a particular item in a sorted list. It’s essential for the list to be sorted beforehand or the algorithm won’t be applicable. 
We start by checking if the value we’re looking for is higher or lower than the middle item in the list. Why the middle? Here’s where the sorted part comes in. By checking whether the searched item is higher or lower than the middle you can then basically ignore one half of the array. If the item is higher it resides in the right part of the array (because it’s sorted beforehand).
This means that you can leave the left part completely and search only in the one you’re interested in.
The above step is repeated throughout the array until you find your item.
*/
function binarySearch(arr, find){
  let smallArr = [];
  if(arr.length < 2){
    if(arr[0] == find){
      return true;
    }else{
      return false;
    }   
  }else{
    let mid = Math.round(arr.length/2);
    if(arr[mid] == find){
      return true;
    }else if(arr[mid] > find){
      smallArr = arr.slice(0,mid);     
    }else{
      smallArr = arr.slice(mid+1,arr.length);
    }
    console.log("smallArr",smallArr);
    return binarySearch(smallArr, find);  
  }
  
}
var x = [1,4,5,6,13,45,67,89, 99, 101,103,110];
var find = 99;
let res = binarySearch(x, find);
console.log(res);