# IntToRoman

The code for solving the problem of converting Integer numbers into Roman
numbers.

## Get Started

### Prequesties

make sure you have:
- [Git](https://git-scm.com/)
- [Nodejs](https://nodejs.org/) version v16.18.0 or higher (we recommend using
  [nvm](https://github.com/nvm-sh/nvm))

### Run it locally

- Clone the repository:
```sh
git clone https://github.com/abderrahmaneMustapha/intToRoman.git
```

- Make sure you are the root of the repository
```sh
cd intToRoman
```

Install dependencies
```
npm install
````

To run the application
```
npm run dev
```

To run the tests
```
npm run test
```

## Problem Solving

The main objective of this application was to solve the problem of converting Integer numbers into Roman
numbers, using nodejs ( other libraries based on nodejs can be used too), and
by follwing the best practices of software engineering.

A TDD methodology was followed while devloping and solving this problem.

I first tried to solve only the basic conversions from integers and roman
numbers in the list below:
I             1 

IV            4

V             5

IX            9

X             10

XL            40

L             50

XC            90

C             100

So i wrote a basic test for each one of these cases, each test case looks like
the one below.

```typescript 

describe("Basic test cases", () => {
  test("Should return I", () => {
    const httpRequest =  {
      query:  {
        number: "1"
      }
    }
    expect(intToRoman(httpRequest)).toEqual("I")
  })
  ...
```

And i come up with a basic solution: 

```typescript

const intToRoman = ({ query }: HttpRequest) => {
  let number = parseInt(query.number)
  switch(number) {
    case 0: return ""
    case 1: return "I"
    case 4: return "IV"
    case 5: return "V"
    case 9: return "IX"
    case 10: return "X"
    case 40: return "XL"
    case 50: return "L"
    case 90: return "XC"
    case 100: return "C"

    default: return ""
  }
};

```

This solution can not convert 2, 3, or even 8 to their roman numeral forms, so
i started by modifying my tests file for a more complex cases like this:

```typescript
describe("Complex test cases", () => {
    test("Should return II", () => {
      const httpRequest =  {
        query:  {
          number: "2"
        }
      }
      expect(intToRoman(httpRequest)).toEqual("II")
    })

    test("Should return XVIII", () => {
      const httpRequest =  {
        query:  {
          number: "18"
        }
      }
      expect(intToRoman(httpRequest)).toEqual("XVIII")
    })
....
```

As i solved the problem so many time before, the best solution that i could
come up with was the follwing approach.

```typescript

const intToRoman = ({ query }: HttpRequest) => {
  let roman = ""

  while(number > 0) {

      if(number == 100)
      {
          number -= 100;
          roman += "C";
      }

      if(number >= 90)
      {
          number -= 90;
          roman += "XC";
      }

      if(number >= 50)
      {
          number -= 50;
          roman += "L";
      }

      if(number >= 40)
      {
          number -= 40;
          roman += "XL";
      }

      while(number >= 10)
      {
          number -= 10;
          roman += "X";
      }

      if(number >= 9)
      {
          number -= 9;
          roman += "IX";
      }

      if(number >= 5)
      {
          number -= 5;
          roman += "V";
      }

      if(number >= 4)
      {
          number -= 4;
          roman += "IV";
      }

      while(number >= 1)
      {
          number -= 1;
          roman += "I";
      }
  }
  return roman
};

```

This was not the end of the problem because i had to handle the cases where
some unexpected inputs or exceptions occure.

So i modified my test file an added the unexpected cases tests like when a
number is larger than 100, when a number is 0, when an input cotains some
characters other than numbers, at first the test fails but this was not the
case after adding the required code to handle the unexpected inputs and
exceptions.

Please feel free to check the [solution](./useCases/convertion/index.ts) and
the [tests](./tests/intToRoman.test.ts) files for more details.

## Architecture and Files Organization

I tried to follwo the [clean
architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
principles while organizing planning for this application architecture.

The application structure look like the following: 

- app: a folder containing the main server code and configuration
- controllers: plays the role of interface adapters in clean architecture
- routes: the application external routing
- tests: a folder containning the unit tests of the application
- useCases: contains the rules related to the behavior of the systems business
logic.
- common: contains functions, types and methods that might be used in all the
  applcation layers.
