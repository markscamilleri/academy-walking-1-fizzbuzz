export class Example {
  FizzBuzz(number: number) {
    if (number < 1 || number > 100) {
      throw new Error("Value is out of range.");
    }

    if (number % 3 === 0 && number % 5 === 0){
      return "FizzBuzz";
    }

    if (number % 3 === 0) {
      return "Fizz";
    }

    if (number % 5 === 0) {
      return "Buzz";
    }

    return number.toString();
  }
}
