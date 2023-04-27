const User = require("./User");
const Blog = require("./Blog");
const Comment = require('./Comment');

User.hasMany(Blog, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

Blog.belongsTo(User, {
  foreignKey: "user_id",
});

Blog.hasMany(Comment, {

})

module.exports = { User, Blog, Comment };
