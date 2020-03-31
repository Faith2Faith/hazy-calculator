function solveEquation(ans) {
  switch (ans[1]) {
    case '+':
      return ans[0] + ans[2]
    case '-':
      return ans[0] - ans[2]
    case '*':
      return ans[0] * ans[2]
    case '/':
      return ans[0] / ans[2]
    default: return NaN
  }
}

function isWorkingValue(value) {
  const operators = ['+', '*', '-']

  return isNumber(value) || operators.includes(value)
}

function isNumber(value) {
  return !isNaN(value)
}

function isIgnoredValue(value) {
  return value === ''
}

function calculate(calculationSteps) {
  let ans = []

  calculationSteps.forEach(calcElements => {
    if (!isIgnoredValue(calcElements) && isWorkingValue(calcElements)) {
      ans.push(calcElements)
    }
  })

  return solveEquation(ans)
}

module.exports = calculate










