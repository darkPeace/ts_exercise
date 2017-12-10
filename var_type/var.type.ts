let mynum: number;
let mystrg: string;
let myany: any;
let mybool: boolean;
let myvoid: void;
let mynull: null;
let myundefined: undefined;
let mynever: never;

mynum = 8;
// mynum = 'string'; /* produce ts error */
mystrg = 'this is a string'; /* ok */
// mystrg = 9 /* produce error */
myany = 4; /* ok */
myany = 'any can be anything includes function'; /* ok */
myany = () => {
  console.log('inside a function');
  
} /* ok */
mybool = true;
// mybool = 'string'; /* produce error */
// myvoid = 'never'; /* produce error */
myvoid = null; /* ok */ /* void is use for function return type */
mynull = undefined; /* ok */
myundefined = null; /* null and undefined can be used interchangeable */
// mynever = null; /* producer error - not assignable */

console.log(mynum, mystrg, myany, mybool, myvoid, mynull, myundefined);
