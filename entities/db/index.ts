import { EventEmitter } from "stream"
import { IData, ISubscriber, ISubscriberDb } from "../model"

export class Subscriber implements ISubscriberDb{
  subscribers:ISubscriber[]
  emitter: EventEmitter = new EventEmitter()

  constructor() {
    this.subscribers = []
  }

  add(subscriber:ISubscriber) {
    this.subscribers.push(subscriber)
  }

  delete(id: string) {
    this.subscribers = this.subscribers.filter(s => s.id !== id)
  }

  addData(id: string, data: IData) {
    this.subscribers = this.subscribers.map((s: ISubscriber) =>{
      if (s.id == id) {
        s.data = data
        this.emitter.emit('dataAdd', s)
        return s
      }
      return s
    })
  
    console.log("id db "+this.subscribers)
  }
} 