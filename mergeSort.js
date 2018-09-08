/*
Algorithm: 
Ref: https://www.geeksforgeeks.org/merge-sort/
Split array in to smaller functions (recursively) till it becomes single element
Find middle element and split array in to two parts left and right based on med
Then pass left and right in to method called merge
In merge method form sortedArray from left and right by compare left and right elements
Finally return sortedarray+ left+ right using spread operator  [ left or right contains empty element or some items remains which will
be concatenated

*/

let mergeSort = list => {
	if(list.length < 2)
		return list;// If length < 2 then it will be smallest one
	let mid   = parseInt(list.length / 2);
	let left  = list.slice(0, mid);
	let right = list.slice(mid, list.length);
    //console.log("left",left);
	return merge(mergeSort(left), mergeSort(right));	
}
/*Merge method will join smallest unit after sorting*/
let merge = (left, right) => {
    let sortedArr = [];
    while(left.length && right.length){
      if(left[0] < right[0]){
        sortedArr.push(left[0]);
        left.splice(0,1)
      }else{
        sortedArr.push(right[0]);
        right.splice(0,1)
      }
    }
   return [...sortedArr, ...left, ...right ]
}
let inputArray = [1,5,8,2,99,12,5,6,11,3,6,7];
let res = mergeSort(inputArray);
console.log("res",res);
