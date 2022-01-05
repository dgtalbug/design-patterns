export type RouteOptions = { start: string, end: string };
export type StrategyType = 'car' | 'hitch-hike' | 'public-transport' | 'bike' | 'walking';

export interface RouteStrategy {
    name: StrategyType;
    buildRoute: (routeOptions: RouteOptions) => string;
    complexCalculation: number;
}