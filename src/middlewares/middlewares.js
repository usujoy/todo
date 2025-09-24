const middlewares = {
  timeLog: (req, res, next) => {
    console.log("Time: ", Date.now());
    next();
  },

  requestLogger: (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  },
};

export default middlewares;
