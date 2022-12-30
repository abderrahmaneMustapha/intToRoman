import { ISubscriberDb } from "../../entities/model"

interface makeGetSubscribersArgs  {
  subscribers:ISubscriberDb
} 

const makeGetSubscribers = ({subscribers}: makeGetSubscribersArgs) => { 
  return function getSubscribers() {
    console.log(subscribers.subscribers.length)
    return subscribers.subscribers.filter(s => s.data)
  }
}

export default makeGetSubscribers
