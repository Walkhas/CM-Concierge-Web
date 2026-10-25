type EdgeContext = {
  next: () => Response | Promise<Response>;
};

export default function reviewRateLimit(_request: Request, context: EdgeContext) {
  return context.next();
}

export const config = {
  path: "/api/reviews/*",
  method: "POST",
  rateLimit: {
    windowLimit: 5,
    windowSize: 60,
    aggregateBy: ["ip", "domain"]
  }
};
