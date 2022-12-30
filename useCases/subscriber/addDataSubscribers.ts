import { IData, ISubscriberDb } from "../../entities/model"

interface makeAddDataSubscribersArgs  {
  subscribers:ISubscriberDb
} 

const makeAddDataSubscribers = ({subscribers}: makeAddDataSubscribersArgs) => { 
  return function addDataSubscribers(id: string, data: IData) {
    subscribers.addData(id, data)
  }
}

export default makeAddDataSubscribers