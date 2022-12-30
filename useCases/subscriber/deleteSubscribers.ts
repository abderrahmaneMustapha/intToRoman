import { ISubscriberDb } from "../../entities/model"

interface makeDeleteSubscribersArgs  {
  subscribers:ISubscriberDb
} 

const makeDeleteSubscribers = ({subscribers}: makeDeleteSubscribersArgs) => { 
  return function deleteSubscribers(id: string) {
    subscribers.delete(id)
  }
}

export default makeDeleteSubscribers
