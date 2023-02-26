function add(num1, num2) {
  const n1 = num1.toString().split('').map(Number).reverse();
  const n2 = num2.toString().split('').map(Number).reverse();

  const steps = {};
  let carryString = '', sumString = '';

  for (let i = 0; i < Math.max(n1.length, n2.length); i++) {
    const digit1 = n1[i] || 0;
    const digit2 = n2[i] || 0;
    const sum = digit1 + digit2 + (carryString ? 1 : 0);

    carryString += (sum > 9 ? '1' : '0');
    sumString += (sum % 10).toString();

    const step = {
      carryString: carryString.padStart(i + 1, '0'),
      sumString: sumString.padStart(i + 1, '0')
    };
    steps[`step${i + 1}`] = step;
  }

  return steps;
}

// Example usage:
const num1 = 1489;
const num2 = 714;
const steps = add(num1, num2);
console.log(steps);
