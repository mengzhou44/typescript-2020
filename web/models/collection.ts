import axios, { AxiosResponse } from 'axios';
import { Eventing } from './eventing';
 

export class Collection<T,K > {
  private data: T[] = [];
  private events: Eventing = new Eventing();
  constructor(private rootUrl: string, private build:(k:K) =>  T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((res: AxiosResponse) => {
      res.data.map( (props: K)=> {
        const t =  this.build(props)
        this.data.push(t);
      });
    
      this.trigger('change');
    });
  }
}
