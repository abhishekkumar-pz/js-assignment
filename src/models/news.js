const mysql = require('../lib/mysql');

const createNews = async (param) => {
    const statement = 'insert into news (title, description, matchId, tourId, sportId) values (?, ?, ?, ?, ?)';
    const parameters = [param.title, param.description, param.matchId, param.tourId, param.sportId];
    return await mysql.query(statement, parameters);
};

const getNewsByMatchId = async (param) => {
    const statement = 'select * from news where matchId = ?';
    const parameters = [param.matchId];
    return await mysql.query(statement, parameters);
};

const getNewsByTourId = async (param) => {
    const statement = 'select * from news where tourId = ?';
    const parameters = [param.tourId];
    return await mysql.query(statement, parameters);
};

const getNewsBySportId = async (param) => {
    const statement = 'select * from news where sportId = ?';
    const parameters = [param.sportId];
    return await mysql.query(statement, parameters);
};

module.exports = {
    createNews: createNews,
    getNewsByMatchId: getNewsByMatchId,
    getNewsByTourId: getNewsByTourId,
    getNewsBySportId: getNewsBySportId
};
