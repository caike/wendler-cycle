(function (factory) {
  // Using as a CommonJS module
  if(typeof module === "object" && typeof module.exports === "object") {
    // For example:
    //   let calculate = require("wendler-cycle");
    //   let program = calculate(315);
    module.exports = factory(false);
  } else {
    // Using as script tag
    //
    // For example:
    //   <script src="wendler-cycle.js"></script>
    //   <script>
    //      let program = window.calculateWendler(315);
    //   </script>
    factory(true);
  }
}((hasWindowObject) => {

  function calculateWendler(maxWeight) {
    const baseNumber = maxWeight * 0.9;
    return [
      { week:1, sets: calculateSet(1, baseNumber) },
      { week:2, sets: calculateSet(2, baseNumber) },
      { week:3, sets: calculateSet(3, baseNumber) },
      { week:4, sets: calculateSet(4, baseNumber) }
    ];
  }

  if(hasWindowObject) {
    window.calculateWendler = calculateWendler;
  }

  function calculateSet(week, baseNumber){
    switch(week) {
      case 1:
        return calculateWeekOne(baseNumber);
        break;
      case 2:
        return calculateWeekTwo(baseNumber)
        break;
      case 3:
        return calculateWeekThree(baseNumber)
        break;
      case 4:
        return calculateWeekFour(baseNumber)
        break;
    }
  }

  function calculateWeekOne(weight) {
    const round = Math.round;
    let firstSet = round(weight * 0.65);
    let secondSet = round(weight * 0.75);
    let thirdSet = round(weight * 0.85);


    return [`${firstSet}x5`, `${secondSet}x5`, `${thirdSet}x5+`];
  }

  function calculateWeekTwo(weight) {
    const round = Math.round;
    let firstSet = round(weight * 0.7);
    let secondSet = round(weight * 0.8);
    let thirdSet = round(weight * 0.9);


    return [`${firstSet}x3`, `${secondSet}x3`, `${thirdSet}x3+`];
  }

  function calculateWeekThree(weight) {
    const round = Math.round;
    let firstSet = round(weight * 0.75);
    let secondSet = round(weight * 0.85);
    let thirdSet = round(weight * 0.95);


    return [`${firstSet}x5`, `${secondSet}x3`, `${thirdSet}x1+`];
  }

  function calculateWeekFour(weight) {
    const round = Math.round;
    let firstSet = round(weight * 0.4);
    let secondSet = round(weight * 0.5);
    let thirdSet = round(weight * 0.6);


    return [`${firstSet}x5`, `${secondSet}x5`, `${thirdSet}x5`];
  }

  return calculateWendler;
}));
