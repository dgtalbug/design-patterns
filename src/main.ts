import { Logger } from './common/utils/logger';
import { Strategy } from './strategy/index';
class Desp{
  constructor(){

  }

  public boot(): void {
    Logger.info(`Application started`);
    const strategy = new Strategy();
    strategy.show();
    strategy.examples();
    return;
  }
}

let application = new Desp();
application.boot();