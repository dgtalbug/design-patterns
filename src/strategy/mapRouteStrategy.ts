import { RouteStrategy, StrategyType, RouteOptions } from './strategy.types';

export abstract class MapRouteStrategy implements RouteStrategy {
	complexCalculation: number = 0;
	constructor(public name: StrategyType) { }

	buildRoute({ start, end }: RouteOptions) {
		return `From ${start} to ${end} takes ${this.complexCalculation} minutes by ${this.name} `;
	}
}