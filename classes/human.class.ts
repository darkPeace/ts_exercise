class Android {

// ts doesn't need properties declaration if constructor function private key present

  // the '?' after parameter names make it optional when making new object instances
  constructor(private _name?: string, private age?:number, private height?: number, private weight?: number) {
    // the '_' in front of parameter ignore the case
  }

  // still searching for good documentation on typeecript getter qnd setter :()
  
}

let apis = new Android('apis', 100);
console.log(apis);