import route from "./route.json";

export const calculateCurrentMilestone = (value: number): string => {
  const routeValues = Object.entries(route);

  const result =
    routeValues
      .sort((a, b) => b[1] - a[1])
      .find((currentVal) => currentVal[1] <= value)?.[0] ?? routeValues[0][0];

  return result;
};

export const calculateRoutePercent = (value: number): number => {
  const totalRoute = route["Grey Wood"];

  const result = Number(((value / totalRoute) * 100).toFixed(2));

  return result > 100 ? 100 : result;
};
