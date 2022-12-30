export interface ISubscriber {
  id: string;
  response: Express.Response
  data?: IData
}

export interface ISubscriberDb {
  subscribers: ISubscriber[];
  add: (subscriber:ISubscriber) => void
  delete: (id: string) => void
  addData:(id: string, data:IData) => void
}

export interface IData {integer: number, roman: string}