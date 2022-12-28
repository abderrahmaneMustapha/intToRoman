import { HttpRequest } from "../common/types"
import intToRoman from "../useCases/convertion"

export default Object.freeze({
  intToRoman: async (req: HttpRequest) => intToRoman(req)
})