# Wendler Calculator

Calculates weights to be used for the Wendler Program :muscle:

## Install

Download and include the single file `wendler-calculator.js`
on your page and call the `calculateWendler(maxWeight)` function
passing it your one rep max.

For example, a call to `calculateWendler( 315 )` should return
the following:

```javascript
[
  {week: 1, sets: ["184x5", "213x5", "241x5+"]}
  {week: 2, sets: ["198x3", "227x3", "255x3+"]},
  {week: 3, sets: ["213x5", "241x3", "269x1+"]},
  {week: 4, sets: ["113x5", "142x5", "170x5"]}}
]
```

## Tests

1. Open [tests/index.html](https://rawgit.com/caike/wendler-cycle/master/tests/index.html)

2. run `npm test`
