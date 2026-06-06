//accessing
let array = ["fruits", "mango", "apple"];
console.log(array[0]);

//insert ending
let fruits = ["orange", "mango", "amrood"];
console.log(fruits.push("apple"));

//insert before

let vegetables = ["palak", "saag", "fingure"];
console.log(vegetables.unshift("toray"));
//insert at specific postion

let array6 = [89, 88, 66, 43];
let array7 = array6.splice(1, 1, 46);
console.log(array7);

let arr = [221, 43, 44, 213, 45, 97];
let arr1 = arr.splice(1, 0, 99);
console.log(arr1);

// Create an array of 5 fruits.

let cotton = ["orange", "amrood", "aplle", "mango", "bannana", "anannas"];
console.log(cotton);

// Print the first fruit.
let mewa = ["orange", "amrood", "aplle", "mango", "bannana", "anannas"];
console.log(mewa[0]);
// Print the last fruit.
let vegetables1 = ["saag", "palak", "ananas", "gupay", "fingure"];
console.log(vegetables1[vegetables1.length - 1]);
// Add one fruit at the end.
let number = [1, 2, 3, 4, 5, 6, 7, 8];
number.push(10);
console.log(number, "add one fruit at end");
// Add one fruit at the beginning.
let num = [1, 3, 2, 4, 6, 7, 444, 4];
num.unshift(0);
console.log(num, "add onne fruit at beginning");

// Update the third fruit.
let update_array = [12, 323, 43, 43, 24, 3231, 442];
update_array.splice(0, 0, 100);
console.log(update_array, "update third fruit");


// Delete the last fruit.
let delete_last = [12.34, 42, 53, 23, 63];
console.log(delete_last.pop(), "delete theh last fruits");
// Delete the first fruit.
let delete_beg = [22, 321, 42, 42, 4113, 4321];
console.log(delete_beg.shift(), "dlete the first fruits");
// Print all fruits using a loop.
let loop = [21, 43, 234, 13, 413];
for (let i = 0; i < loop.length; i++) {
    console.log(loop[i], "this is loop");
}
// Check if "Mango" exists.
let place = ["orange", "amrood", "aplle", "mango", "bannana", "anannas"];
console.log(place.includes("mango"));
//////\\//////////\\\\\\\\\\\\\\\\\\\//\\\\\\\\\\\||||\/||/\|||||||||||
// Logic Questions

// Find the largest number.
let largest = [12, 34, 65, 13, 98, 565];
let large = largest[0]
for (let i = 1; i < largest.length; i++) {
    if (largest[i] > large) {
        large = largest[i];


    }

}
console.log(large);

// Find the smallest number.
let smallest = [10, 32, 54, 23, 665, 87];
let small = smallest[0];
for (let i = 1; i < smallest.length; i++) {
    if (smallest[i]< small) {
      
    }
   
    
}
 console.log(small);

// Count total elements.
let counting = [12,221,32,122,878,97,98];//in 0 = 12
//index 1 =221
//index 2 = 32;
//index 3 = 122
let count = 0;
for(let i=0; i<counting.length; i++){
    count++;
}
console.log(count);

// Find the sum of all numbers.
let add = [675, 8, 96, 665, 444, 77];
let sum = add[0];
for (let i = 1; i < add.length; i++) {
    sum += add[i];

}
console.log(sum);


// Find the average.

// Concept
// push the push is a method that we insert an item into array end point
// pop the pop is amethod in array that we used for deleted the item from the end point
// shift is  method to deleted the item from beginning. 
// unshift the unshift is a method that we used in array to insert the item from beginning. 
// splice the splice is a method that to start from item, deleted the item and insert item(2,1,45); start , delete , value the insert.
// slice the slice method to insert the value in this method the dleted value not present
// Practice Questions
// Insert a value at index 2.
let insert = [12,43,66,79];
insert.splice(2,0,77);
console.log(insert,"Insert a value at index 2.");

// Remove a value from index 3.

let remove = [432,4,221,778,421];
remove.splice(3,1);
console.log(remove,"Remove a value from index 3.");

// Create a copy using slice.
let copy = [332,131,3331,42];
let new_copy = copy.slice(1,3);

console.log(new_copy,"Create a copy using slice.");
console.log(copy);


// Remove 2 elements using splice.
let element = [214,53,124,53];
element.splice(0,2,0);
console.log(element, "Remove 2 elements using splice")

// Add 3 new elements using splice.
let adding = [23,3,2,424,41];
adding.splice(0,0,12,13,14);
console.log(adding,"Add 3 new elements using splice.");
// Find index of a specific value.
let INDEX = [12,43,54,65,87,98];
let find = INDEX.indexOf(54);
console.log(find,"Find index of a specific value: 54");
// Check whether a value exists.
let exists = [12,65,977,432,642,643];
let con = exists.includes(643);
console.log(con," Check whether a value exists.");

// Logic Questions
// Reverse an array without reverse().

let rev = [1,2,3,4,5,6,7,8,9,10];
rev.reverse();
console.log(rev,"Reverse an array without reverse()");
// Move first element to last.  using two variables
let ELEMENt = [12,23,32,43,34,21];
let first = ELEMENt[0];
let last = ELEMENt[5];
ELEMENt[0]  = ELEMENt[5];
ELEMENt[5] = first;


console.log(first,ELEMENt[0], ELEMENt);

// Move last element to first.
let array3 = [12,13,14,15,16];
let f_index= array3[array3.length-1];
for(let i=0; i<array3.length-1; i++){
    array3[i+1] = array3[i];
}
array3[0] =f_index ;
console.log(array3);



// Remove duplicate values.
// Merge two arrays.
let array1 = [12,22,33,44,55,66];
let array2 = [11,21,31,41,51,61];
let combine = array1.concat(array2);
let another_method = [array1] + [array2];//this is to string not array used.
console.log(combine);
console.log(another_method);
//moving the first element to last.
let moving = [12,23,33,44,55,66,77,88,99,100];
let index = moving[0];//save
for(let i=1; i<moving.length; i++){  //loop
moving[i-1] = moving[i];//shifting


}
moving[moving.length-1] = index; //place
console.log(moving);//log output

