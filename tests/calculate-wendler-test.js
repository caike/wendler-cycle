const expect = require("chai").expect;
const calculate = require("../calculate-wendler");

describe("Calculating 4 week program", () => {
  it("returns program for week 1", () => {
    let program = calculate(315);
    expect(program[0]).to.deep.equal({week: 1, sets: ["184x5", "213x5", "241x5+"]});
  });
  it("returns program for week 2", () => {
    let program = calculate(315);
    expect(program[1]).to.deep.equal({week: 2, sets: ["198x3", "227x3", "255x3+"]});
  });
  it("returns program for week 3", () => {
    let program = calculate(315);
    expect(program[2]).to.deep.equal({week: 3, sets: ["213x5", "241x3", "269x1+"]});
  });
  it("returns program for week 4", () => {
    let program = calculate(315);
    expect(program[3]).to.deep.equal({week: 4, sets: ["113x5", "142x5", "170x5"]});
  });
});
