const User = require("./User");
const Blog = require("./Blog");
const Comment = require('./Comment');

User.hasMany(Blog, {
  foreignKey: "user_id",
  onDelete: "CASCADE"
});

User.hasMany(Comment, {
  foreignKey: "user_id"
});

Blog.belongsTo(User, {
  foreignKey: "user_id"
});

Blog.hasMany(Comment, {
  foreignKey: ""
});

Comment.belongsTo(User, {
  foreignKey: "user_id"
});

Comment.belongsTo(Blog, {
  foreignKey: ""
});


//user has many blogs 
//user has many comments 

//comment belongs to user 
//comment belongs to blog

//blog belongs to user
//blog has many comments 





module.exports = { User, Blog, Comment };
