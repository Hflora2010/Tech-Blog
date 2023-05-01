const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./comment');

// User.hasMany(Blog, {
//   foreignKey: "user_id",
// });

// User.hasMany(Comment, {
//   foreignKey: "comment_id",
//   onDelete: "CASCADE"
// });

Blog.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE"
});

Blog.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE"
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

// Comment.belongsTo(Blog, {
//   foreignKey: "user_id",
//   onDelete: "CASCADE"
// });


//user has many blogs 
//user has many comments 

//comment belongs to user 
//comment belongs to blog

//blog belongs to user
//blog has many comments 





module.exports = { User, Blog, Comment };
