import { calculateCurrentMilestone, calculateRoutePercent } from "../utils";
import route from "../route.json";

const routeKeys = Object.keys(route);

describe("utils", () => {
  it("calculateCurrentMilestone works with 0", () => {
    expect(calculateCurrentMilestone(0)).toBe(routeKeys[0]);
  });

  it("calculateCurrentMilestone works with big number", () => {
    expect(calculateCurrentMilestone(100000000000)).toBe(
      routeKeys[routeKeys.length - 1]
    );
  });

  it("calculateRoutePercent works with 0", () => {
    expect(calculateRoutePercent(0)).toBe(0);
  });

  it("calculateRoutePercent works with high number", () => {
    expect(calculateRoutePercent(100000000)).toBe(100);
  });

  it("calculateRoutePercent works with half route", () => {
    const index = routeKeys[routeKeys.length - 1] as keyof typeof route;
    const totalRoute = route[index];
    expect(calculateRoutePercent(totalRoute / 2)).toBe(50);
  });
});
