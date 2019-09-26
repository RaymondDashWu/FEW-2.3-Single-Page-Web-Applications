/* eslint-disable semi */

// returns a random number 0 to n - 1
function random(n) {
  return Math.floor(Math.random() * n)
}

// returns a random rolled dice resulting in a number 1 to n
function randomD(s) {
  return Math.ceil(Math.random() * s)
}

// n = number of dice to roll
// s = how many sides the dice has
// rolls n number of s sided die
function randomRolls(n, s) {
  const diceResults = []
  let total = 0
  for (i = 0; i < n; i++) {
    const randResult = randomD(s)
    diceResults.push(randResult)
    total += randResult
  }
  return [diceResults, total]
}

module.exports.random = random
module.exports.randomD = randomD
module.exports.randomRolls = randomRolls
