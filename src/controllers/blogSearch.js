const fetchAndAnalyzeBlogData = require("../services/fetch");
const _ = require('lodash');

const blogSearch = async function (req, res){
    const query = req.query.query;
    if (!query) {
      return res.status(400).json({ error: 'Query parameter "query" is required.' });
    }
  
    // Implement search functionality
    const analytics = await fetchAndAnalyzeBlogData();
    const matchingBlogs = _.filter(analytics.uniqueTitles, blog => blog.toLowerCase().includes(query.toLowerCase()));
  
    // Respond with the matching blogs
    res.json({ matchingBlogs });
}

module.exports = blogSearch;