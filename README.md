
Creating a list of Restful API for a blog post app using Node.js(Express) + Mongodb + Mongoose

To recap the API has the following endpoints:

GET /api/posts/ returns only title and tags for all posts [[{"id":"",title":"","tags":""},...]
POST /api/posts/ with post parameters {'title', 'tags', 'content'} creates a new post
PUT /api/posts/:postID with parameters {'title', 'tags', 'content'} will update an entry
GET /api/posts/:postID returns the post found at postID
DELETE /api/posts/:postID deletes the post found at postID

See more in https://dartmouth-cs52-17s.github.io/assignments/lab/redux-blog+server/



# Lab 5 

* Blog backend deployed on heroku 
* See https://allenlab5.herokuapp.com/api/posts

# Testing

* Get all posts
  `curl -X GET "https://allenlab5.herokuapp.com/api/posts"` 

* create new post
```
curl -X POST -H "Content-Type: application/json" -d '{
    "title": "first post",
    "tags": "words",
    "content":  "this is a test post",
    "cover_url": "https://media.giphy.com/media/uscuTAPrWqmqI/giphy.gif"
}' "https://allenlab5.herokuapp.com/api/posts"
```

* update by POSTID
```
curl -X PUT -H "Content-Type: application/json" -d '{
    "title": "Updated the Post"
}' "https://allenlab5.herokuapp.com/api/posts/POSTID"
```

* fetch one post by POSTID
```
curl -X GET "https://allenlab5.herokuapp.com/api/posts/POSTID"
```

*  delete by POSTID
```
curl -X DELETE -H "Content-Type: application/json" "https://allenlab5.herokuapp.com/api/posts/POSTID"
```


