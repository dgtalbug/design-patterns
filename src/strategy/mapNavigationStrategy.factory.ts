import { Logger } from '../common/utils/logger';
import {
  MapCarStrategy, MapBikeStrategy, MapPublicTransportStrategy, MapWalkStrategy,
} from './strategies';
import { StrategyType } from './strategy.types';

export default class MapNavigationStrategyFactory {
  private logger = Logger;

  createNavigationStrategy(type: StrategyType) {
    switch (type) {
      case 'car':
        return new MapCarStrategy();
      case 'bike':
        return new MapBikeStrategy();
      case 'walking':
        return new MapPublicTransportStrategy();
      case 'public-transport':
        return new MapWalkStrategy();
      default:
        this.logger.info(`The ${type} strategy is not available. Falling back to default car strategy.`);
        return new MapCarStrategy();
    }
  }
}
