const News = require("../controllers/news");

module.exports = function (app) {
  // Create news
  app.post("/news", async (req, res, next) => {
    try {
      const { title, description, matchId, tourId, sportId } = req.body;
      const result = await News.createNews({
        title,
        description,
        matchId,
        tourId,
        sportId,
      });
      res.json(result);
    } catch (err) {
      next(err);
    }
  });

  // Get news by match id
  app.get("/news/match/:matchId", async (req, res, next) => {
    try {
      const matchId = req.params.matchId;
      const result = await News.getNewsByMatchId({ matchId });
      return res.json(result);
    } catch (err) {
      next(err);
    }
  });

  // Get news by tour id
  app.get("/news/tour/:tourId", async (req, res, next) => {
    try {
      const tourId = req.params.tourId;
      const result = await News.getNewsByTourId({ tourId });
      return res.json(result);
    } catch (err) {
      next(err);
    }
  });

  // Get news by sport id
  app.get("/news/sport/:sportId", async (req, res, next) => {
    try {
      const sportId = req.params.sportId;
      const result = await News.getNewsBySportId({ sportId });
      return res.json(result);
    } catch (err) {
      next(err);
    }
  });
};