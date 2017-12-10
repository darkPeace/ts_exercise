let arr_mynum: number[];
let arr_mystrg: string[];
// let arr_myany: any[]; any can also be an array without array declaration
let myany: any;
let arr_mybool: boolean[];
// let arr_myvoid: void[]; no use
// let arr_mynull: null[]; no use
// let arr_myundefined: undefined[]; no use
// let arr_mynever: never[]; no use

myany = ['string', 8, null, undefined, () => {console.log('function');}]; /* no need to declared as an array */
arr_mybool = [true, false/* , null */]; /* null produce error */
arr_mynum = [3, 4, 5/* ,'string' */]; /* 'string' produce error */

console.log( arr_mynum, arr_mystrg, /* arr_ */myany, arr_mybool);

let mytupple: [number, string]; /* array consist of number and string */
// mytupple = [3, 6, 'strg1', 'strg2']; /* error */
mytupple = [3, 'strg1', 'strg2']; /* ok */
mytupple = [3, 'strg2']; /* ok */

let mytupple2: [string, number]; /* array consist of number and string */
// mytupple2 = ['strg1', 'strg2', 3, 6]; /* error */
mytupple2 = ['strg2', 3, 6]; /* ok */
mytupple2 = ['strg2', 6]; /* ok */

console.log(mytupple, mytupple2);;
