import { HttpRequest } from "../common/types";
import intToRoman from "../useCases/convertion";

describe("Should run", () => {
  test("This test should be accepted", () => {
    expect(1+1).toEqual(2)
  });
});

describe("Basic test cases", () => {
  test("Should return I", () => {
    const httpRequest =  {
      query:  {
        number: "1"
      }
    }
    expect(intToRoman(httpRequest)).toEqual("I")
  })

  test("Should return IV", () => {
    const httpRequest =  {
      query:  {
        number: "4"
      }
    }
    expect(intToRoman(httpRequest)).toEqual("IV")
  })

  test("Should return V", () => {
    const httpRequest =  {
      query:  {
        number: "5"
      }
    }
    expect(intToRoman(httpRequest)).toEqual("V")
  })

  test("Should return IX", () => {
    const httpRequest =  {
      query:  {
        number: "9"
      }
    }
    expect(intToRoman(httpRequest)).toEqual("IX")
  })

  test("Should return X", () => {
    const httpRequest =  {
      query:  {
        number: "10"
      }
    }
    expect(intToRoman(httpRequest)).toEqual("X")
  })

  test("Should return XL", () => {
    const httpRequest =  {
      query:  {
        number: "40"
      }
    }
    expect(intToRoman(httpRequest)).toEqual("XL")
  })

  test("Should return L", () => {
    const httpRequest =  {
      query:  {
        number: "50"
      }
    }
    expect(intToRoman(httpRequest)).toEqual("L")
  })

  test("Should return XC", () => {
    const httpRequest =  {
      query:  {
        number: "90"
      }
    }
    expect(intToRoman(httpRequest)).toEqual("XC")
  })

  test("Should return C", () => {
    const httpRequest =  {
      query:  {
        number: "100"
      }
    }
    expect(intToRoman(httpRequest)).toEqual("C")
  })
})

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

    test("Should return LXX", () => {
      const httpRequest =  {
        query:  {
          number: "70"
        }
      }
      expect(intToRoman(httpRequest)).toEqual("LXX")
    })

    test("Should return LXXVII", () => {
      const httpRequest =  {
        query:  {
          number: "77"
        }
      }
      expect(intToRoman(httpRequest)).toEqual("LXXVII")
    })

    test("Should return XCIII", () => {
      const httpRequest =  {
        query:  {
          number: "93"
        }
      }
      expect(intToRoman(httpRequest)).toEqual("XCIII")
    })

    test("Should return XXI", () => {
      const httpRequest =  {
        query:  {
          number: "21"
        }
      }
      expect(intToRoman(httpRequest)).toEqual("XXI")
    })

    test("Should return LXVI", () => {
      const httpRequest =  {
        query:  {
          number: "66"
        }
      }
      expect(intToRoman(httpRequest)).toEqual("LXVI")
    })
})