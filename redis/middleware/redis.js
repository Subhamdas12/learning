const Redis = require("ioredis");
//setting up Redis
const redis = new Redis({
  host: "***",
  port: 0,
  db: 0,
  password: "abcdefghijklmnopqrstuvwxyz",
});
redis.on("connect", () => {
  console.log("Redis conneected");
});
//this is for setting up the catch data in redis
const getCatchData = (key) => {
  return async (req, res, next) => {
    //checking if the data is already in redis
    let data = await redis.get(key);
    if (data) {
      //if the data is already in redis
      return res.json(JSON.parse(data));
    }
    //if the data is not in redis, we are going to call the next function
    next();
  };
};
//this is for setting up the rate limit and the timer like how many request can be send in a time
const rateLimit = (limit, timer) => {
  return async (req, res, next) => {
    //setting up the client ip
    const clientIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    //setting up the key
    const key = `${clientIp}:request_count`;
    //this is the request count or the count of the request
    const requestCount = await redis.incr(key);
    if (requestCount == 1) {
      //if the request count is 1, we are going to set the timer
      redis.expire(key, timer);
    }
    //setting up the time remaining
    const timeRemaining = await redis.ttl(key);
    if (requestCount > limit) {
      //if the request count is greater than the limit, we are going to send the error
      return res
        .status(429)
        .send(`Too many requests,please try again after ${timeRemaining}`);
    }
    next();
  };
};

module.exports = {
  getCatchData,
  rateLimit,
  redis,
};
