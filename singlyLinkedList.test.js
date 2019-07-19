const list = require('./singlyLinkedList.js');

describe('singlyLinkedList', () => {
  test('pushing one node', () => {
    let test = list;
    test.push(0);
    expect(test.length).toEqual(1);
  });

  test('pushing two nodes', () => {
    let test2 = list;
    console.log(test2);
    test2.remove(0);
    test2.push(0);
    expect(test2.length).toEqual(1);
  })
});