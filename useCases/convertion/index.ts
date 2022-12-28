import { HttpRequest } from "../../common/types";

const intToRoman = ({ query }: HttpRequest) => {
  let number = parseInt(query.number)
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

export default intToRoman