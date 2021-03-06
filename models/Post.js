const db = require('../database/connection');

const Post = {};

Post.all = () => {
  return db.any(
    "SELECT * FROM posts ORDER BY created_at DESC"
  )
}

Post.create = newPost => {
  return db.one(
    "INSERT INTO posts (stars, author, created_at, title, body) VALUES ($<stars>, $<author>, $<created_at>, $<title>, $<body>) RETURNING *",
    newPost
  )
}

Post.update = post => {
  return db.one(
    "UPDATE posts SET author = $<author>, stars = $<stars>, title = $<title>,body = $<body> WHERE id = $<id> RETURNING *",
    post
  )
}

Post.findById = id => {
  return db.one(
    "SELECT * FROM posts WHERE id = $<id>",
    { id: id }
  )
}

Post.delete = id => {
  return db.result(
    "DELETE FROM posts WHERE id = $<id>",
    { id: id }
  )
}

module.exports = Post;
