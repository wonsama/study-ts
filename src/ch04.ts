export default function init() {
  type Filter ={
    (array:number[], f:(item:number=>boolean):number[])
    (array:string[], f:(item:string=>boolean):string[])
  }

  let fil:Filter = (arr, (item):)
}

// class StringIterable implements Iterable<string> {
//   #strings: string[];
//   #currentIndex: number = 0;
//   constructor(strings: string[]) {
//     this.#strings = strings;
//   }

//   [Symbol.iterator](): Iterator<string> {
//     let that = this;
//     let currentIndex = that.#currentIndex,
//       length = that.#strings.length;

//     const iterator: Iterator<string> = {
//       next(): { value: string; done: boolean } {
//         const value = that.#strings[currentIndex];
//         const done = currentIndex == length;
//         currentIndex++;
//         return { value, done };
//       },
//     };
//     return iterator;
//   }
// }
