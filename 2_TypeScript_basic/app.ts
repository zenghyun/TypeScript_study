let userInput: unknown;
let userName: string; 

userInput = 5;
userInput = 'Zenghyun';

// if(typeof userInput === 'string') {
    // userName = userInput;
// }

// function generateError(message: string, code: number): never {
//     throw { message: message, errorCode: code};
// }
// generateError('An error occured!', 500);



function sum (a:number, ...nums: number[]) : number {
    let totalNums = 0; 
    for( let key in nums) {
        totalNums += nums[key];
    }
    return a + totalNums;

}

console.log(sum(1,2,3,4,5,6,7,8,9,10));

