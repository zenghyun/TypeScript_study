function add(n1:number, n2:number) {
    return n1 + n2;
}

function printResult(num:number) : void{
    console.log('Result : ' + num);
}

function addAndHandle(n1:number, n2:number, callback: (num:number) => void) {
    const result = n1 + n2; 
    callback(result);
}

printResult(add(5,12));

let combineVales: (a:number, b:number) => number; 

combineVales = add;
// combineVales = printResult;
// combineVales = 5;

console.log(combineVales(8,8));

addAndHandle(10,20, (result) => {console.log(result)});

function sendRequest(data: string, cb: (response: any) => void) {
    // ... sending a request with "data"
    return cb({data: 'Hi there!'});
  }
   
  sendRequest('Send this!', (response) => { 
    console.log(response);
    return true;
   });