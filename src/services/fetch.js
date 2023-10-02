const axios = require("axios");
const _ = require("lodash");

const fetchAndAnalyzeBlogData = _.memoize(async () => {
    try{
      const response = await axios.get('https://intent-kit-16.hasura.app/api/rest/blogs', {
              headers: {
                'x-hasura-admin-secret': '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6',
              }
            });
      
            const {blogs} = await response.data;
            // Calculate analytics
            const totalBlogs = blogs.length;
            const longestBlog = _.maxBy(blogs, blog => blog.title.length);
            const blogsWithPrivacy = _.filter(blogs, blog => blog.title.toLowerCase().includes('privacy'));
            const uniqueTitles = _.uniqBy(blogs, 'title');
      
            return {
              totalBlogs,
              longestBlog: longestBlog.title,
              blogsWithPrivacy: blogsWithPrivacy.length,
              uniqueTitles: uniqueTitles.map(blog => blog.title)
            };
          } catch(error){
            throw error;
          }
  });


module.exports = fetchAndAnalyzeBlogData;