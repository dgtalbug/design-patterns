import { Logger } from '../common/utils/logger';
import { MapNavigationStrategyFactory } from './mapNavigationStrategy.factory';
import { RouteOptions, StrategyType } from './strategy.types';

export class MapClient {
  private logger = Logger;
	strategyFactory = new MapNavigationStrategyFactory();

	public startNavigation(options: RouteOptions, strategyType: StrategyType) {
		this.logger.info(`Strategy: ${strategyType}`)
		const navigationStrategy = this.strategyFactory.createNavigationStrategy(strategyType);
		const route = navigationStrategy.buildRoute(options);
		this.logger.data(route);
		return route;
	}
}