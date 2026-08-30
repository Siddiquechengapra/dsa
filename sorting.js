
// function selectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let min = i
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[min]) {
//                 min = j
//             }
//         }
//         [arr[i], arr[min]] = [arr[min], arr[i]]
//     }
//    return arr
// }

// function bubbleSort(arr){

//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length-i;j++){

//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//             }
//         }
//     }
//     return arr
// }

// function binarySearch(arr, target) {
//     let left = 0
//     let right = arr.length - 1
//     while (left <= right) {
//         let middle = Math.floor((left + right) / 2)
//         if (target === arr[middle]) {
//             return middle
//         } else if (target < arr[middle]) {
//             right = middle - 1
//         } else if (target > arr[middle]) {

//             left = middle + 1
//         }
//     }
//     return -1
// }
// let nums = [3,4,5,7,1,2]
//         [ 1,3,4,5,7,2]
//           p
// function insertionSort(nums){
//     for(let i=1;i<nums.length;i++){
//         let curr=nums[i]
//         let prev= i-1
//         while(curr<nums[prev]&& prev>=0){
//             nums[prev+1]=nums[prev]
//             prev--
//         }
//         nums[prev+1]=curr
//     }
//     return nums
// }

let arr = [
    42, 17, 89, 3, 56, 21, 74, 8,
    35, 91, 12, 67, 29, 50, 6, 83,
    14, 72, 45, 1, 63, 27, 98, 10,
    38, 55, 19, 81, 4, 69, 31, 87,
    23, 60, 11, 76, 48, 2, 94, 33
];

// function mergeSort(arr) {
//     let middle = Math.floor(arr.length / 2)
//     if (arr.length === 1) {
//         return arr
//     }
//     let left = mergeSort(arr.slice(0, middle))
//     let right = mergeSort(arr.slice(middle))

//     return merge(left, right)

// }
// function merge(arr1, arr2) {
//     let m = arr1.length 
//     let n = arr2.length 
//     let p1 = m-1
//     let p2 = n-1

//     for (let i = m + n - 1; i >= 0; i--) {
//         if (p2 < 0) {
//             break
//         }
//         if ( p1 >= 0 && arr1[p1] > arr2[p2] ) {
//             arr1[i] = arr1[p1]
//             p1--
//         } else {
//             arr1[i] = arr2[p2]
//             p2--
//         }
//     }

//     return arr1
// }
// --------------------------------------------------------------------------


console.log(insertionSort(arr))