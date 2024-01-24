const getGames = require('./helpers/getGames');

exports.handler = async (event) => {
  return await getGames(event);
};
