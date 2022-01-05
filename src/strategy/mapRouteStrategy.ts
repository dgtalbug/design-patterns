import { RouteStrategy, StrategyType, RouteOptions } from './strategy.types';

export default abstract class MapRouteStrategy implements RouteStrategy {
  complexCalculation = 0;

  // eslint-disable-next-line no-useless-constructor
  constructor(public name: StrategyType) { }

  buildRoute({ start, end }: RouteOptions) {
    return `From ${start} to ${end} takes ${this.complexCalculation} minutes by ${this.name} `;
  }
}
