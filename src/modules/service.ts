import { IEntity } from './entity';

export class HelloService {
  hello() { return 'hello service'; }
  entity(): IEntity { return { hogeStr: '', fugaNum: null }; }
}
