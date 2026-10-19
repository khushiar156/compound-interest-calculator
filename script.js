import { p, r, n, t } from "./values.js";

const amount = p * (1 + r / n) ** (n * t);

const compoundInterest = amount - p;

console.log(`Compound interest after ${t} years is: ${compoundInterest.toFixed(2)}`);