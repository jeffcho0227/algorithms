const list = require('./singlyLinkedList.js');

test('add 1 node(1) to linedList', () => {
  let test = list.push(1);
  expect(test.length).toBe(1);
})