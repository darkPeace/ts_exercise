class Android {

// ts doesn't need properties declaration if constructor function private key present

  // the '?' after parameter names make it optional when making new object instances
  constructor(private _model?: string, private _year?:number) {
    // the '_' in front of parameter ignore the case
  }

  /**
  * access modifier
  * public - accessible anywhere
  * private - can only use inside class
  * protected - accessible inside class and subclasses
  **/

  /**
  * getter n setter function doesn't need acces modifier key
  * compiler ertor on getter and setter: accessor only available when targetting ECMAScrpt 5 and higher
  * solution: run tsc with --target ES2016 option
  * eg: tsc --target ES2016 /path/of/file.ts
  **/
  get year(){
    return this._year;
  }

  set year(v:number){
    this._year=v
  }

  protected getAge(): number{ /* protected function */
    return new Date().getFullYear() - this._year
  }
  
}

class Robot extends Android { /* inheritance of Androids */
  constructor(private _sku: string, model: string, year: number) { /* required parameter should placed before optional parameters */
    super(model, year);
    console.log('robot created. Age: '+ this.getAge()); /* getAge() is accessable here (subclass) */
  }

  get sku():string{
    return this._sku
  }

}

let apis = new Android('apis', 100);
console.log(apis);
let year = apis.year
console.log(year);

let robot = new Robot('sku', 'model', 2015)
// console.log(robot.getAge()); /* getAge() is not accessible here */
console.log(robot);
