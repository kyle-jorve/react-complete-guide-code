//========================================//
//=====----- JAVASCRIPT CLASSES -----=====//
//========================================//

class Auerstelian {
    location = 'Auerstel';

    printLocation = () => {
        console.log(this.location);
    }
}

class Pendrake extends Auerstelian {
    name = 'Pendrake';

    printName = () => {
        console.log(this.name);
    }
}

// const pendrake = new Pendrake();

// pendrake.printName();
// pendrake.printLocation();

//===============================================//
//=====----- SPREAD AND REST OPERATORS -----=====//
//===============================================//

// const nums = [1, 2, 3, 4, 5, 6];
// const newNums = [...nums, 32];

// console.log(newNums);

// const pendrake = {
//     name: 'Pendrake'
// };

// const newPendrake = {
//     ...pendrake,
//     age: 17
// };

// console.log(newPendrake);

//===================================//
//=====----- DESTRUCTURING -----=====//
//===================================//

// const nums = [1, 2, 3, 4, 5, 6];

// [num1, num2] = nums;
// [num1, , num3] = nums;

// console.log(num1, num2);
// console.log(num1, num3);

// const pendrake = new Pendrake();

// ({name} = {name: 'Pendrake', age: 17});

// console.log(name);

//===================================================//
//=====----- REFERENCE AND PRIMITIVE TYPES -----=====//
//===================================================//

// PRIMITIVE TYPES: numbers, strings, booleans. These get COPIED when they are reassigned to a new variable.
// REFERENCE TYPES: objects, arrays. These do not get copied, but are REFERENCED when they are reassigned to a new variable. When an object or array is created, it is stored in memory. Any subsequent reference to the original object or array is just that--a reference, pointing back to the original object or array.

// primitive types
// const num = 1;
// const num2 = num; // this is a COPY--not a reference to the original num

// reference types
// const pendrake = new Pendrake();
// const pendrake2 = pendrake;

// pendrake.name = 'Talis';

// console.log(pendrake2.name); // "Talis" gets logged, even though pendrake2 was not edited.

// const pendrake3 = {...pendrake}; // The spread operator makes this a true copy.

// pendrake.name = 'Talis';

// console.log(pendrake3.name); // "Pendrake" gets logged, because pendrake3 is a true copy of the pendrake object.

//=====================================//
//=====----- ARRAY FUNCTIONS -----=====//
//=====================================//

// const nums = [1, 2, 3, 4, 5, 6];
// const doubleNums = nums.map(num => num * 2);

// console.log(doubleNums);