import { Subscriber } from "../../entities/db";
import makeAddDataSubscribers from "./addDataSubscribers";
import makeAddSubscribers from "./addSubscribers";
import makeDeleteSubscribers from "./deleteSubscribers";
import makeGetSubscribers from "./getSubscribers";

const subscribers = new Subscriber() 

const getSubscribers =  makeGetSubscribers({subscribers: subscribers});
const deleteSubscribers =  makeDeleteSubscribers({subscribers: subscribers});
const addSubscribers =  makeAddSubscribers({subscribers: subscribers});
const addDataSubscribers =  makeAddDataSubscribers({subscribers: subscribers});

const subscriberService = Object.freeze({
  getSubscribers,
  deleteSubscribers,
  addSubscribers,
  addDataSubscribers,
  subscribers,
})

export default subscriberService

export {
  getSubscribers,
  deleteSubscribers,
  addSubscribers,
  addDataSubscribers
}