import { HttpRequest } from "../../common/types";

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

export default intToRoman