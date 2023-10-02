const fetchAndAnalyzeBlogData = require("../services/fetch");

const blogStats = async function(req, res){
    try {
        const analytics = await fetchAndAnalyzeBlogData();
        res.json(analytics);
      } catch (error) {
        res.status(500).json({error: error.message});
      }
};

module.exports = blogStats;