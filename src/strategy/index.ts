import { DesignPatterns } from '../common/constants/constants';
import { Logger } from '../common/utils/logger';
import { MapClient } from './mapClient';

class Strategy {
  private logger;

  constructor() {
    this.logger = Logger;
  }

  public show() {
    this.logger.info(DesignPatterns.strategy.title);
    this.logger.info(DesignPatterns.strategy.message);
  }

  private explain() {
    const mapClient = new MapClient();
    mapClient.startNavigation({ start: 'English Garden', end: 'Allian Arena' }, 'car');
    mapClient.startNavigation({ start: 'English Garden', end: 'Allian Arena' }, 'bike');
    mapClient.startNavigation({ start: 'English Garden', end: 'Allian Arena' }, 'walking');
    mapClient.startNavigation({ start: 'English Garden', end: 'Allian Arena' }, 'public-transport');
  }

  public examples() {
    this.explain();
  }
}

export default Strategy;
