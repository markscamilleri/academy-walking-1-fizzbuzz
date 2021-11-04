import { Example } from "../main/example";

describe("A FizzBuzz function", () => {
  let example: Example;

  beforeEach(() => {
    example = new Example();
  });

  describe("when it receives inputs that are less than 1 or greater than 100", () => {
    it.each`
      number
      ${0}
      ${101}
      ${-35}
    `("throws an error", ({ number }) => {
      expect(() => example.FizzBuzz(number)).toThrowError(
        "Value is out of range."
      );
    });
  });

  describe("when it receives inputs from 1 to 100", () => {
    describe("and the input is not a multiple of 3 or 5", () => {
      it.each`
        number | expectedOutput
        ${1}   | ${"1"}
        ${4}   | ${"4"}
        ${88}  | ${"88"}
      `("will output the value as a string", ({ number, expectedOutput }) => {
        expect(example.FizzBuzz(number)).toEqual(expectedOutput);
      });
    });

    describe("and the input is a multiple of 3 and not 5", () => {
      it.each`
        number
        ${3}
        ${72}
        ${93}
      `('will output "Fizz"', ({ number }) => {
        expect(example.FizzBuzz(number)).toEqual("Fizz");
      });
    });

    describe("and the input is a multiple of 5 and not 3", () => {
      it.each`
        number
        ${5}
        ${40}
        ${50}
        ${100}
      `('will output "Buzz"', ({ number }) => {
        expect(example.FizzBuzz(number)).toEqual("Buzz");
      });
    });

    describe("and the input is a multiple of both 3 and 5", () => {
        it.each`
          number
          ${15}
          ${45}
          ${60}
        `('will output "FizzBuzz"', ({number}) => {
            expect(example.FizzBuzz(number)).toEqual("FizzBuzz");
        })
    })
  });
});
