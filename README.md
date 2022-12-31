# intToRoman

Contains the code that handle and solve the problem of converting integer into
Roman numbers.

This Readme file only contains documentation about the second step of the
problem, for more details about the application problem solving, and
architecture, please check the main readme file in the main branch.

# Server Sent Event Problem Solving

This problem was solved by first creating a route "/subscribe" where the user will
subscribe to receive the convertion result.

So the user will have to call " new EventSource('/subscribe')" to send a
request to the server that he want to join the subscriber lists.

This user will be added to the subscribers, the subcribers list contains the
response object associated to the client in addition to a unique id for each
subscribed client, for more deitails about the how subscribers is saved please
check the the following two files: [file1](./entities/db/index.ts),
[file2](./entities/model/index.ts) in the entities directory.

The server will send the generated id to the client, as response for the event
subscription, the id is saved in the client side, and sent to the server again
with the integer number when the form is submitted.

After this, the data will be sent to another endpoint that 
convert the number into the roman reprentation, and update the subscriber
object associated to the client who sent the data.

As we can see in [subscriber db](./entities/db/index.ts) an event will be
emited when the subscriber object is update successfully.

```typescript
export class Subscriber implements ISubscriberDb {
...
  addData(id: string, data: IData) {
    this.subscribers = this.subscribers.map((s: ISubscriber) =>{
      if (s.id == id) {
        s.data = data
        this.emitter.emit('dataAdd', s)
        return s
      }
      return s
    })
  }

}

```

The subscribers service will receive this event and send the results of the
conversion to the client in a form of server sent event.

```typescript

  subscriberService.subscribers.emitter.on('dataAdd', (sub: ISubscriber) => {
      setTimeout(() => {
        sub.response.write(`data: ${JSON.stringify(sub.data)}\n\n`)
      }, 3000)
  })

```