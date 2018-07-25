require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 4567;
const Post = require('./models/post')
const Topic = require('./models/topic')
const moment = require("moment")

const jsonParser = bodyParser.json();
app.use(jsonParser);

app.get('/reviews.json', (request, response) => {
    Post.all()
      .then(posts => {
        posts.map(post => {
          post.created_at = moment(post.created_at).format('LL')
        })
        return posts
      })
    .then(posts => {
      response.json({ posts: posts})
    })
})

app.post('/posts.json', (request, response) => {
  const newPost = {
    author: request.body.author,
    stars: request.body.stars,
    title: request.body.title,
    body: request.body.body
  };
  Post.create(newPost).then(post => {
    response.json(post);
  });
});

app.get('/posts/:id.json', (request, response) => {
  let id = request.params.id;
  Post.findById(id)
  .then(post => {
    response.json(post);
  });
})

app.delete('/posts/:id.json', (request, response) => {
  const id = request.params.id
  Post.delete(id)
    .then(post => {
      response.json(post);
    })
})

app.put('/posts/:id.json', (request, response) => {
  let id = request.params.id
  const newPost = {
    id: id,
    author: request.body.author,
    stars: request.body.stars,
    title: request.body.title,
    body: request.body.body
  };
  Post.update(newPost)
    .then(post => {
    response.json(post);
  });
})

app.listen(PORT, () => {
  console.log(`Express web server listening on port ${PORT}`);
});
