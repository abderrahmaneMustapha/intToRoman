import { ISubscriber, ISubscriberDb } from "../../entities/model"

interface makeAddSubscribersArgs  {
  subscribers:ISubscriberDb
} 

const makeAddSubscribers = ({subscribers}: makeAddSubscribersArgs) => { 
  return function addSubscribers(subscriber: ISubscriber) {
    subscribers.add(subscriber)
  }
}

export default makeAddSubscribers
