
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
let nums = [3,4,5,7,1,2]

function insertionSort(nums){
    for(let i=1;i<nums.length;i++){
        let curr=nums[i]
        let prev= i-1
        while(curr<nums[prev]&& prev>=0){
            nums[prev+1]=nums[prev]
            prev--
        }
        nums[prev+1]=curr
    }
    return nums
}





console.log(insertionSort(nums))