import { HttpRequest } from "../common/types"
import intToRoman from "../useCases/convertion"
import { addDataSubscribers } from "../useCases/subscriber"

export default Object.freeze({
  intToRoman: async (req: HttpRequest) => { 
    const result = intToRoman(req) 
    const { subscriberId } = req.query as never
    if (result) {
      addDataSubscribers(subscriberId, result)
      return "Data added successfully, please wait your request is gonna be fullfilled by a server sent event"
    }
    throw new Error("Results calculation failed")
  }
})