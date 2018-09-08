/*
Algorithm: 
https://www.geeksforgeeks.org/quick-sort/
1. Choose first element as Pivot
2. Iterate over remaining elements in an array. Crete two sub arrays left and right
3. All smaller elements than pivot assign to left array and larger elements assign to right array
4. Continue this process till array resolves as single element **recursion
5. Then using spread operator join left array + pivot + right array
*/

let inputArray = [1,5,8,2,99,12,5,6,11,3,6,7];
let quickSort = list => {
	if(list.length < 2 )
		return list;
	let pivot = list[0];
	let left  = [];
	let right = [];
	for(let i = 1; i < list.length; i++ ){
		if(list[i] < pivot)
			left.push(list[i]);
		else
			right.push(list[i]);
	}
	return [...quickSort(left), pivot, ...quickSort(right)]
}
console.log(quickSort(inputArray));
