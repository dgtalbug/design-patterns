import { MapRouteStrategy } from './mapRouteStrategy';
import { RouteOptions } from './strategy.types';

export class MapCarStrategy extends MapRouteStrategy {
	constructor() {
		super('car');
	}
	buildRoute({ start, end }: RouteOptions) {
		this.complexCalculation = (start + end).length * 1 / 2;
		return super.buildRoute({ start, end })
	}
}
export class MapBikeStrategy extends MapRouteStrategy {
	constructor() {
		super('bike');
	}
	buildRoute({ start, end }: RouteOptions) {
		this.complexCalculation = (start + end).length * 3 / 2;
		return super.buildRoute({ start, end })
	}
}
export class MapWalkStrategy extends MapRouteStrategy {
	constructor() {
		super('walking');
	}
	buildRoute({ start, end }: RouteOptions) {
		this.complexCalculation = (start + end).length * 10 / 2;
		return super.buildRoute({ start, end })
	}
}
export class MapPublicTransportStrategy extends MapRouteStrategy {
	constructor() {
		super('public-transport');
	}
	buildRoute({ start, end }: RouteOptions) {
		this.complexCalculation = Math.round((start + end).length * Math.random());
		return super.buildRoute({ start, end })
	}
}

