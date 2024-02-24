const News = require('../models/news');

const createNews = async (req) => {
    return await News.createNews(req);
};

const getNewsByMatchId = async (param) => {
    return await News.getNewsByMatchId(param);
};

const getNewsByTourId = async (param) => {
    return await News.getNewsByTourId(param);
};

const getNewsBySportId = async (param) => {
    return await News.getNewsBySportId(param);
};

module.exports = {
    createNews: createNews,
    getNewsByMatchId: getNewsByMatchId,
    getNewsByTourId: getNewsByTourId,
    getNewsBySportId: getNewsBySportId
};
