function addElementToBeginningOfArray(array, element) {
 // add the element to the beginning of the array without mutating the array
return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element){
  // add element to the beginning of the array by mutating the array
  array.unshift(element);
  
}

function addElementToEndOfArray(array, element) {
return [...array,element];
}

function destructivelyAddElementToEndOfArray(array, element) {
array.push(element);

}

function accessElementInArray(array, index) {
array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
array.shift();
return array;
}

function removeElementFromBeginningOfArray(array) {
 
 return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;

}

function removeElementFromEndOfArray(array) {
var index = array.length -1 
return array.slice(0, index);
}
