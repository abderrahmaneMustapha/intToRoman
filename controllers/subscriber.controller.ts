import subscriberService from "../useCases/subscriber";
import crypto from "crypto"
import { ISubscriber } from "../entities/model";
export default Object.freeze({
  subscribe: (request: Express.Request, response: Express.Response) => {
    const headers = {
      'Content-Type': 'text/event-stream',
      'Connection': 'keep-alive',
      'Cache-Control': 'no-cache'
    };

    const subscriberId  = {
      subscriberId: crypto.randomUUID()
    }

    
    response.writeHead(200, headers);
    response.write(`data: ${JSON.stringify(subscriberId)}\n\n`)

    const subscriber = {
      id: subscriberId.subscriberId,
      response,
    }

    subscriberService.subscribers.emitter.on('dataAdd', (sub: ISubscriber) => {
      setTimeout(() => {
        sub.response.write(`data: ${JSON.stringify(sub.data)}\n\n`)
      }, 3000)
     
    })
 
    subscriberService.addSubscribers(subscriber)


    request.on('close', () => {
      subscriberService.deleteSubscribers(subscriberId)
    })
  }   
})