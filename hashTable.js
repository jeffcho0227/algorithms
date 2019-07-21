/*
hash tables are used to store key-value pairs
they are like arrays, but the keys are not ordered
unliked arrays, hash tables are fast for all of the following:
finding values, adding new values, and removing values
*/

// function hash(key, arrayLen) {
//   let total = 0;
//   for (let char of key) {
//     let value = char.charCodeAt(0) - 96;
//     total = (total + value) & arrayLen;
//   }
//   return total;
// }


class HashTable {
  //if don't include a size, the size would be 53
  constructor(size=53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    //the greater tha prime number the better chance to avoid collisions
    let total = 0;
    let PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = []
    }
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  //collect all the keys
  keys() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++){
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }

  //collect all the values
  values() {

  }
}

let ht = new HashTable();
ht.set('hello', 'world');
ht.set('what', 'ok');
// console.log(ht.keyMap);
console.log(ht.get('hello'));


