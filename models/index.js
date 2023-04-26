const User = require("./User");
const blogPost = require("./Blog");

User.hasMany(blogPost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  blogPost.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  module.exports = { User, Project };