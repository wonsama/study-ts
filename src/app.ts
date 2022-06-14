/*
    FILE : 
      template.ts 
    TITLE : 
      템플릿
    CREATED : 
      2022.05.11
*/

/////////////////////////////////////////////////////////////////////
//
//  IMPORT
//
// import "dotenv/config";
import * as ch03 from "./ch03";

/////////////////////////////////////////////////////////////////////
//
//  CONST
//
// const VERSION: string = process.env.VERSION || "1.0";

/////////////////////////////////////////////////////////////////////
//
//  VARIABLE
//

/////////////////////////////////////////////////////////////////////
//
//  DEFAULT
//

/////////////////////////////////////////////////////////////////////
//
//  TYPE
//

/////////////////////////////////////////////////////////////////////
//
//  INTERFACE
//

/////////////////////////////////////////////////////////////////////
//
//  CLASS
//

/////////////////////////////////////////////////////////////////////
//
//  PRIVATE FUNCTION
//

/////////////////////////////////////////////////////////////////////
//
//  EXPORTS FUNCTION
//

/////////////////////////////////////////////////////////////////////
//
//  INIT
//

// EntryPoint
async function init() {
  // console.log(ch03.squareOf(3));
  // let b: bigint = 10n;
  // let oneMillion = 1_000_000;
  // let a = Symbol("a");
  // let b: symbol = Symbol("b");
  // console.log(a);
  // console.log(b);
  // const c: unique symbol = Symbol("c");
  // const d: unique symbol = Symbol("c");
  // console.log(c);
  // console.log(d);
  // let p1: { firstname: string; lastname: string } = {
  //   firstname: "won",
  //   lastname: "sama",
  // };
  // let p2 = new Person("won", "sama");
  // console.log(p1);
  // console.log(p2);

  // let a: { a: number; b?: number; [c: number]: boolean };
  // a = { a: 10, 10: false };
  // console.log(a);

  // let a: object;
  // a = { x: 1 };
  // console.log(a);

  // let func = (): (number | string)[] => {
  //   let a:any = [];
  //   a.push(1);
  //   a.push("1");
  //   return a;
  // };

  // console.log(func);
  // let a: readonly number[] = [1, 2, 3];
  // a.push(4) // readonly 는 push 메소드가 없음

  const enum AAA {
    A,
    B,
    C,
  }
  function TT(aaa: AAA) {
    return aaa;
  }
  console.log(TT(99));
}

class Person {
  firstname: string;
  lastname: string;
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

// EntryPoint Call
init().catch((err) => {
  console.log(err);
});
