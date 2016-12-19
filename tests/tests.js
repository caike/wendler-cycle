const test = QUnit.test;
const calculateWendler = window.calculateWendler;

test("Test Week One", function(assert){
  let program = calculateWendler(315);

  assert.deepEqual(program[0], {week: 1, sets: ["184x5", "213x5", "241x5+"]});
});

test("Test Week Two", function(assert){
  let program = calculateWendler(315);

  assert.deepEqual(program[1], {week: 2, sets: ["198x3", "227x3", "255x3+"]});
});

test("Test Week Three", function(assert){
  let program = calculateWendler(315);

  assert.deepEqual(program[2], {week: 3, sets: ["213x5", "241x3", "269x1+"]});
});

test("Test Week Four", function(assert){
  let program = calculateWendler(315);

  assert.deepEqual(program[3], {week: 4, sets: ["113x5", "142x5", "170x5"]});
});
